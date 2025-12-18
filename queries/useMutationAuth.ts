import { useMutation, useQueryClient } from '@tanstack/react-query';

import { authApi } from '@/api/auth';
import { useAuthStore } from '@/stores/authStore';

import { getQueryOptionAuthMe } from './useQueryAuth';

export const useRequestSignup = () => {
  return useMutation({
    mutationFn: (email: string) => authApi.requestSignup(email),
  });
};

export const useVerifySignup = () => {
  const queryClient = useQueryClient();
  const { setTokens } = useAuthStore();

  return useMutation({
    mutationFn: async ({ email, code }: { email: string; code: string }) => {
      const tokenResponse = await authApi.verifySignup(email, code);
      return tokenResponse;
    },
    onSuccess: async (tokenResponse) => {
      setTokens(tokenResponse.accessToken, tokenResponse.refreshToken);
      queryClient.invalidateQueries({ queryKey: [getQueryOptionAuthMe().queryKey[0]] });
    },
  });
};

export const useRequestLogin = () => {
  return useMutation({
    mutationFn: (email: string) => authApi.requestLogin(email),
  });
};

export const useVerifyLogin = () => {
  const queryClient = useQueryClient();
  const { setTokens } = useAuthStore();

  return useMutation({
    mutationFn: async ({ email, code }: { email: string; code: string }) => {
      const tokenResponse = await authApi.verifyLogin(email, code);
      return tokenResponse;
    },
    onSuccess: async (tokenResponse) => {
      setTokens(tokenResponse.accessToken, tokenResponse.refreshToken);
      queryClient.invalidateQueries({ queryKey: [getQueryOptionAuthMe().queryKey[0]] });
    },
  });
};
