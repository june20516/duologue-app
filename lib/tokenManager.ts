import axios, { isAxiosError } from 'axios';
import { router } from 'expo-router';

import { ErrorCode } from '@/constants/errorCodes';
import { useAuthStore } from '@/stores/authStore';

interface RefreshTokenResponse {
  accessToken: string;
}

class TokenRefreshManager {
  private status: 'idle' | 'refreshing' = 'idle';
  private refreshPromise: Promise<string> | null = null;

  /**
   * 토큰 갱신을 시도합니다.
   * 이미 갱신 중이면 진행 중인 promise를 반환하여 중복 갱신을 방지합니다.
   */
  async refresh(): Promise<string> {
    if (this.status === 'refreshing' && this.refreshPromise) {
      return this.refreshPromise;
    }

    this.status = 'refreshing';
    this.refreshPromise = this.performRefresh();

    return this.refreshPromise;
  }

  private async performRefresh(): Promise<string> {
    try {
      const refreshToken = useAuthStore.getState().refreshToken;

      if (!refreshToken) {
        throw new Error('REFRESH_TOKEN_NOT_FOUND');
      }

      const API_URL = process.env.EXPO_PUBLIC_API_URL;
      const { data } = await axios.post<RefreshTokenResponse>(`${API_URL}/auth/refresh`, {
        refresh_token: refreshToken,
      });

      const currentRefreshToken = useAuthStore.getState().refreshToken!;
      useAuthStore.getState().setTokens(data.accessToken, currentRefreshToken);

      this.reset();

      return data.accessToken;
    } catch (error) {
      this.reset();

      if (isAxiosError(error)) {
        const errorCode = error.response?.data?.error;

        if (
          errorCode === ErrorCode.INVALID_REFRESH_TOKEN ||
          errorCode === ErrorCode.INVALID_TOKEN ||
          errorCode === ErrorCode.REFRESH_TOKEN_EXPIRED ||
          errorCode === ErrorCode.USER_NOT_FOUND
        ) {
          useAuthStore.getState().clearAuth();
          router.replace('/');
          throw new Error(errorCode);
        }
      }

      throw error;
    }
  }

  reset(): void {
    this.status = 'idle';
    this.refreshPromise = null;
  }

  isRefreshing(): boolean {
    return this.status === 'refreshing';
  }
}

export const tokenManager = new TokenRefreshManager();
