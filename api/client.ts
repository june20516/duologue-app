import axios from 'axios';

import { tokenManager } from '@/lib/tokenManager';
import { useAuthStore } from '@/stores/authStore';
import { convertKeysToCamelCase, convertKeysToSnakeCase } from '@/utils/caseConverter';

import { apiLogger } from './logger';

const API_URL = process.env.EXPO_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error('EXPO_PUBLIC_API_URL is not defined in environment variables');
}

export const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    apiLogger.logRequest(config);

    // Add Authorization header
    const token = useAuthStore.getState().accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Convert request body to snake_case
    if (config.data) {
      config.data = convertKeysToSnakeCase(config.data);
    }

    return config;
  },
  (error) => {
    apiLogger.logError(error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    apiLogger.logResponse(response);

    // Convert response data to camelCase
    if (response.data) {
      response.data = convertKeysToCamelCase(response.data);
    }

    return response;
  },
  async (error) => {
    apiLogger.logError(error);

    const originalRequest = error.config;

    // 401 에러 처리
    if (error.response?.status === 401) {
      const errorCode = error.response?.data?.error;

      // USER_NOT_FOUND 에러인 경우 즉시 로그아웃 및 모달 표시
      if (errorCode === 'USER_NOT_FOUND') {
        const { clearAuth } = useAuthStore.getState();
        const { useUiStore } = await import('@/stores/uiStore');
        const { showErrorModal } = useUiStore.getState();

        clearAuth();
        showErrorModal('유저 정보를 찾을 수 없습니다. 다시 로그인해주세요');

        return Promise.reject(error);
      }

      // 이미 재시도한 요청이면 에러 반환
      if (originalRequest._retry) {
        return Promise.reject(error);
      }

      // 재시도 플래그 설정 (무한 루프 방지)
      originalRequest._retry = true;

      try {
        // 토큰 갱신 (중복 방지 내장)
        const newAccessToken = await tokenManager.refresh();

        // 새 토큰으로 헤더 업데이트
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        // 원래 요청 재시도
        return apiClient(originalRequest);
      } catch (refreshError) {
        // 갱신 실패 시 에러 전파 (tokenManager에서 이미 로그아웃 처리함)
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
