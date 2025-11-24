import { AxiosError } from 'axios';

import type { ApiError } from '@/types/api';

export const handleApiError = (error: unknown): ApiError => {
  if (error instanceof AxiosError) {
    return {
      code: error.response?.data?.error || 'UNKNOWN_ERROR',
      message: error.response?.data?.message || '오류가 발생했습니다',
      status: error.response?.status,
    };
  }

  return {
    code: 'NETWORK_ERROR',
    message: '네트워크 연결을 확인해주세요',
  };
};
