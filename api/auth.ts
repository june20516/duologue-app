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

import { handleConnectError, unwrap } from './connectError';
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
      const result = unwrap(response);
      return { message: result.message };
    } catch (error) {
      throw handleConnectError(error);
    }
  },

  verifySignup: async (email: string, code: string): Promise<TokenResponse> => {
    try {
      const request = create(VerifySignupRequestSchema, { email, code });
      const response = await authClient.verifySignup(request);
      const result = unwrap(response);
      return {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
      };
    } catch (error) {
      throw handleConnectError(error);
    }
  },

  requestLogin: async (email: string): Promise<MessageResponse> => {
    try {
      const request = create(RequestLoginRequestSchema, { email });
      const response = await authClient.requestLogin(request);
      const result = unwrap(response);
      return { message: result.message };
    } catch (error) {
      throw handleConnectError(error);
    }
  },

  verifyLogin: async (email: string, code: string): Promise<TokenResponse> => {
    try {
      const request = create(VerifyLoginRequestSchema, { email, code });
      const response = await authClient.verifyLogin(request);
      const result = unwrap(response);
      return {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
      };
    } catch (error) {
      throw handleConnectError(error);
    }
  },

  getMe: async (): Promise<AuthMe> => {
    try {
      const request = create(GetMeRequestSchema, {});
      const response = await authClient.getMe(request);
      const result = unwrap(response);
      return {
        id: Number(result.userId),
        email: result.email,
      };
    } catch (error) {
      throw handleConnectError(error);
    }
  },

  logout: async (refreshToken: string): Promise<void> => {
    try {
      const request = create(LogoutRequestSchema, { refreshToken });
      const response = await authClient.logout(request);
      unwrap(response);
    } catch (error) {
      throw handleConnectError(error);
    }
  },
};
