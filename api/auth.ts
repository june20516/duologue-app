import { create } from '@bufbuild/protobuf';

import {
  GetMeRequestSchema,
  LogoutRequestSchema,
  RequestLoginRequestSchema,
  RequestSignupRequestSchema,
  VerifyLoginRequestSchema,
  VerifySignupRequestSchema,
} from '@/gen/duologue/v1/auth_pb';
import type { AuthMe } from '@/models/user';

import { handleConnectError } from './connectError';
import { authClient } from './transport';

interface MessageResponse {
  message: string;
}

interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

export const authApi = {
  requestSignup: async (email: string): Promise<MessageResponse> => {
    try {
      const request = create(RequestSignupRequestSchema, { email });
      const response = await authClient.requestSignup(request);
      return { message: response.message };
    } catch (error) {
      throw handleConnectError(error);
    }
  },

  verifySignup: async (email: string, code: string): Promise<TokenResponse> => {
    try {
      const request = create(VerifySignupRequestSchema, { email, code });
      const response = await authClient.verifySignup(request);
      return {
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
      };
    } catch (error) {
      throw handleConnectError(error);
    }
  },

  requestLogin: async (email: string): Promise<MessageResponse> => {
    try {
      const request = create(RequestLoginRequestSchema, { email });
      const response = await authClient.requestLogin(request);
      return { message: response.message };
    } catch (error) {
      throw handleConnectError(error);
    }
  },

  verifyLogin: async (email: string, code: string): Promise<TokenResponse> => {
    try {
      const request = create(VerifyLoginRequestSchema, { email, code });
      const response = await authClient.verifyLogin(request);
      return {
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
      };
    } catch (error) {
      throw handleConnectError(error);
    }
  },

  getMe: async (): Promise<AuthMe> => {
    try {
      const request = create(GetMeRequestSchema, {});
      const response = await authClient.getMe(request);
      return {
        id: Number(response.userId),
        email: response.email,
      };
    } catch (error) {
      throw handleConnectError(error);
    }
  },

  logout: async (refreshToken: string): Promise<void> => {
    try {
      const request = create(LogoutRequestSchema, { refreshToken });
      await authClient.logout(request);
    } catch (error) {
      throw handleConnectError(error);
    }
  },
};
