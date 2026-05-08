import { create } from '@bufbuild/protobuf';
import { createClient } from '@connectrpc/connect';
import { createConnectTransport } from '@connectrpc/connect-web';
import { router } from 'expo-router';

import { AuthService, RefreshAccessTokenRequestSchema } from '@/gen/duologue/v1/auth_pb';
import { ErrorCode } from '@/gen/duologue/v1/common_pb';
import { useAuthStore } from '@/stores/authStore';

import { handleConnectError } from './connectError';

const API_URL = process.env.EXPO_PUBLIC_SERVER_URL;

if (!API_URL) {
  throw new Error('EXPO_PUBLIC_SERVER_URL is not defined in environment variables');
}

const refreshTransport = createConnectTransport({
  baseUrl: API_URL,
});

const refreshClient = createClient(AuthService, refreshTransport);

class TokenRefreshManager {
  private status: 'idle' | 'refreshing' = 'idle';
  private refreshPromise: Promise<string> | null = null;

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

      const request = create(RefreshAccessTokenRequestSchema, {
        refreshToken,
      });

      const response = await refreshClient.refreshAccessToken(request);

      const currentRefreshToken = useAuthStore.getState().refreshToken!;
      useAuthStore.getState().setTokens(response.accessToken, currentRefreshToken);

      this.reset();

      return response.accessToken;
    } catch (error) {
      this.reset();

      const appError = handleConnectError(error);

      if (
        appError.code === ErrorCode.INVALID_TOKEN ||
        appError.code === ErrorCode.AUTH_ERROR ||
        appError.code === ErrorCode.AUTH_REQUIRED ||
        appError.code === ErrorCode.PROFILE_NOT_FOUND
      ) {
        useAuthStore.getState().clearAuth();
        router.replace('/');
        throw appError;
      }

      throw appError;
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

export const tokenRefreshManager = new TokenRefreshManager();
