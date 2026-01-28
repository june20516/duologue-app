import type { DescMessage } from '@bufbuild/protobuf';
import type { Interceptor, UnaryRequest, UnaryResponse } from '@connectrpc/connect';

import { useAuthStore } from '@/stores/authStore';

import { ErrorCode } from '../gen/duologue/v1/common_pb';

import { handleConnectError } from './connectError';
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
    } catch (rawError) {
      // 에러를 정규화하여 처리
      const error = handleConnectError(rawError);

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
          // 갱신 실패 시 원래 에러(또는 갱신 에러) throw
          throw error;
        }
      }

      // 그 외 에러는 그대로 throw (이미 ApplicationError로 변환됨)
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
