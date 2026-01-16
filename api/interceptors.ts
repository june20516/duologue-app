import type { DescMessage } from '@bufbuild/protobuf';
import type { Interceptor, UnaryRequest, UnaryResponse } from '@connectrpc/connect';

import { useAuthStore } from '@/stores/authStore';

import { ErrorCode } from '../gen/duologue/v1/common_pb';

import { ApplicationError } from './connectError';
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
      // ApplicationError는 unwrap에서 throw됨
      if (error instanceof ApplicationError) {
        // 프로필 없음 에러 처리
        if (error.code === ErrorCode.PROFILE_NOT_FOUND) {
          await handleProfileNotFound();
          throw error;
        }

        // 인증 에러 시 토큰 갱신 시도
        if (
          error.code === ErrorCode.AUTH_ERROR ||
          error.code === ErrorCode.AUTH_REQUIRED ||
          error.code === ErrorCode.INVALID_TOKEN
        ) {
          try {
            const newToken = await tokenRefreshManager.refresh();
            req.header.set('Authorization', `Bearer ${newToken}`);
            return await next(req);
          } catch {
            throw error;
          }
        }
      }

      // ConnectError(네트워크 오류 등)는 그대로 throw
      throw error;
    }
  };
};

const handleProfileNotFound = async (): Promise<void> => {
  const { clearAuth } = useAuthStore.getState();
  const { useUiStore } = await import('@/stores/uiStore');
  const { showErrorModal } = useUiStore.getState();

  clearAuth();
  showErrorModal('프로필 정보를 찾을 수 없습니다. 다시 로그인해주세요');
};
