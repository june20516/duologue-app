import { AuthMe } from '@/models/user';

import { apiClient } from './client';
import { handleApiError } from './error';

interface RequestSignupRequest {
  email: string;
}

interface MessageResponse {
  message: string;
}

interface VerifySignupRequest {
  email: string;
  code: string;
}

interface TokenResponse {
  access_token: string;
  refresh_token: string;
}

interface GetMeResponse {
  user: AuthMe;
}

export const authApi = {
  requestSignup: async (email: string): Promise<MessageResponse> => {
    try {
      const response = await apiClient.post<MessageResponse>('/auth/request-signup', {
        email,
      } as RequestSignupRequest);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  verifySignup: async (email: string, code: string): Promise<TokenResponse> => {
    try {
      const response = await apiClient.post<TokenResponse>('/auth/verify-signup', {
        email,
        code,
      } as VerifySignupRequest);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  requestLogin: async (email: string): Promise<MessageResponse> => {
    try {
      const response = await apiClient.post<MessageResponse>('/auth/request-login', {
        email,
      } as RequestSignupRequest);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  verifyLogin: async (email: string, code: string): Promise<TokenResponse> => {
    try {
      const response = await apiClient.post<TokenResponse>('/auth/verify-login', {
        email,
        code,
      } as VerifySignupRequest);
      return response.data;
    } catch (error) {
      throw handleApiError(error);
    }
  },

  getMe: async (): Promise<AuthMe> => {
    try {
      const response = await apiClient.get<GetMeResponse>('/auth/me');
      return response.data.user;
    } catch (error) {
      throw handleApiError(error);
    }
  },
};
