import type { DescMessage } from '@bufbuild/protobuf';
import type { Interceptor, UnaryRequest, UnaryResponse } from '@connectrpc/connect';
import { Code, ConnectError } from '@connectrpc/connect';

import { useAuthStore } from '@/stores/authStore';

import { ERROR_CODES } from './errorCodes';
import { apiLogger } from './logger';
import { tokenRefreshManager } from './tokenRefresh';

type UnaryReq = UnaryRequest<DescMessage, DescMessage>;
type UnaryRes = UnaryResponse<DescMessage, DescMessage>;

export const createLoggingInterceptor = (): Interceptor => {
  return (next) => async (req) => {
    if (!req.stream) {
      apiLogger.logConnectRequest(req);
    }
    try {
      const res = await next(req);
      if (!req.stream) {
        apiLogger.logConnectResponse(req as UnaryReq, res as UnaryRes);
      }
      return res;
    } catch (error) {
      if (!req.stream) {
        apiLogger.logConnectError(req as UnaryReq, error);
      }
      throw error;
    }
  };
};

export const createAuthInterceptor = (): Interceptor => {
  return (next) => async (req) => {
    const token = useAuthStore.getState().accessToken;
    if (token) {
      req.header.set('Authorization', `Bearer ${token}`);
    }

    try {
      return await next(req);
    } catch (error) {
      if (error instanceof ConnectError && error.code === Code.Unauthenticated) {
        const errorCode = extractErrorCode(error);

        if (errorCode === ERROR_CODES.PROFILE_NOT_FOUND) {
          await handleProfileNotFound();
          throw error;
        }

        try {
          const newToken = await tokenRefreshManager.refresh();
          req.header.set('Authorization', `Bearer ${newToken}`);
          return await next(req);
        } catch {
          throw error;
        }
      }
      throw error;
    }
  };
};

const extractErrorCode = (error: ConnectError): string | undefined => {
  return error.metadata.get('x-error-code') ?? undefined;
};

const handleProfileNotFound = async (): Promise<void> => {
  const { clearAuth } = useAuthStore.getState();
  const { useUiStore } = await import('@/stores/uiStore');
  const { showErrorModal } = useUiStore.getState();

  clearAuth();
  showErrorModal('프로필 정보를 찾을 수 없습니다. 다시 로그인해주세요');
};
