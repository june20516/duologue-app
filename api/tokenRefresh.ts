import { create } from '@bufbuild/protobuf';
import { Code, ConnectError, createClient } from '@connectrpc/connect';
import { createConnectTransport } from '@connectrpc/connect-web';
import { router } from 'expo-router';

import { AuthService, RefreshAccessTokenRequestSchema } from '@/gen/duologue/v1/auth_pb';
import { ErrorCode } from '@/gen/duologue/v1/common_pb';
import { useAuthStore } from '@/stores/authStore';

import { unwrap, ApplicationError } from './connectError';

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
      const result = unwrap(response);

      const currentRefreshToken = useAuthStore.getState().refreshToken!;
      useAuthStore.getState().setTokens(result.accessToken, currentRefreshToken);

      this.reset();

      return result.accessToken;
    } catch (error) {
      this.reset();

      if (error instanceof ApplicationError) {
        if (
          error.code === ErrorCode.INVALID_TOKEN ||
          error.code === ErrorCode.AUTH_ERROR ||
          error.code === ErrorCode.AUTH_REQUIRED ||
          error.code === ErrorCode.PROFILE_NOT_FOUND
        ) {
          useAuthStore.getState().clearAuth();
          router.replace('/');
          throw error;
        }
      }

      // Fallback for Connect errors if needed, though ApplicationError covers protocol errors
      if (error instanceof ConnectError) {
        if (error.code === Code.Unauthenticated) {
          useAuthStore.getState().clearAuth();
          router.replace('/');
          throw error;
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

export const tokenRefreshManager = new TokenRefreshManager();
