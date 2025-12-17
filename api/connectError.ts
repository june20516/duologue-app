import { Code, ConnectError } from '@connectrpc/connect';

import type { ApiError } from '@/types/api';

const codeToStatus: Record<Code, number> = {
  [Code.Canceled]: 499,
  [Code.Unknown]: 500,
  [Code.InvalidArgument]: 400,
  [Code.DeadlineExceeded]: 504,
  [Code.NotFound]: 404,
  [Code.AlreadyExists]: 409,
  [Code.PermissionDenied]: 403,
  [Code.ResourceExhausted]: 429,
  [Code.FailedPrecondition]: 400,
  [Code.Aborted]: 409,
  [Code.OutOfRange]: 400,
  [Code.Unimplemented]: 501,
  [Code.Internal]: 500,
  [Code.Unavailable]: 503,
  [Code.DataLoss]: 500,
  [Code.Unauthenticated]: 401,
};

export const handleConnectError = (error: unknown): ApiError => {
  if (error instanceof ConnectError) {
    const errorCode = error.metadata.get('x-error-code') || 'UNKNOWN_ERROR';

    return {
      code: errorCode,
      message: error.message,
      status: codeToStatus[error.code] || 500,
    };
  }

  if (error instanceof Error) {
    return {
      code: 'NETWORK_ERROR',
      message: error.message || '네트워크 연결을 확인해주세요',
    };
  }

  return {
    code: 'UNKNOWN_ERROR',
    message: '알 수 없는 오류가 발생했습니다',
  };
};
