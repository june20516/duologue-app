import { create } from '@bufbuild/protobuf';
import { Code, ConnectError, createClient } from '@connectrpc/connect';
import { createConnectTransport } from '@connectrpc/connect-web';
import { router } from 'expo-router';

import { ErrorCode } from '@/constants/errorCodes';
import { AuthService, RefreshAccessTokenRequestSchema } from '@/gen/duologue/v1/auth_pb';
import { useAuthStore } from '@/stores/authStore';

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

      if (error instanceof ConnectError) {
        const errorCode = this.extractErrorCode(error);

        if (
          errorCode === ErrorCode.INVALID_REFRESH_TOKEN ||
          errorCode === ErrorCode.INVALID_TOKEN ||
          errorCode === ErrorCode.REFRESH_TOKEN_EXPIRED ||
          errorCode === ErrorCode.USER_NOT_FOUND ||
          error.code === Code.Unauthenticated
        ) {
          useAuthStore.getState().clearAuth();
          router.replace('/');
          throw new Error(errorCode || 'TOKEN_REFRESH_FAILED');
        }
      }

      throw error;
    }
  }

  private extractErrorCode(error: ConnectError): string | undefined {
    return error.metadata.get('x-error-code') ?? undefined;
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
