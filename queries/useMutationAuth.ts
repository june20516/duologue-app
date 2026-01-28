import { useMutation, useQueryClient } from '@tanstack/react-query';

import { authApi } from '@/api/auth';
import { profileApi } from '@/api/profile';
import { useAuthStore } from '@/stores/authStore';

import { getQueryOptionAuthMe } from './useQueryAuth';

export const useRequestSignup = () => {
  return useMutation({
    mutationFn: (email: string) => authApi.requestSignup(email),
  });
};

export const useVerifySignup = () => {
  const queryClient = useQueryClient();
  const { setTokens, setMe } = useAuthStore();

  return useMutation({
    mutationFn: async ({ email, code }: { email: string; code: string }) => {
      const tokenResponse = await authApi.verifySignup(email, code);
      return tokenResponse;
    },
    onSuccess: async (tokenResponse) => {
      setTokens(tokenResponse.accessToken, tokenResponse.refreshToken);

      // 로그인 후 즉시 me 데이터 가져오기
      try {
        const [authMe, profileMe] = await Promise.all([
          authApi.getMe(),
          profileApi.getMe().catch(() => null), // 프로필이 없을 수 있음 (회원가입 직후)
        ]);

        const combinedMe = {
          ...authMe,
          userId: profileMe?.userId ?? authMe.id,
          nickname: profileMe?.nickname ?? null,
          gender: profileMe?.gender ?? null,
          region: profileMe?.region ?? null,
          shortBio: profileMe?.shortBio ?? null,
          profileImageUrl: profileMe?.profileImageUrl ?? null,
          exp: profileMe?.exp ?? 0,
          level: profileMe?.level ?? 1,
          interests: profileMe?.interests ?? [],
          profileComplete: !!(profileMe?.nickname && profileMe?.gender),
        };

        setMe(combinedMe);
      } catch (error) {
        console.error('Failed to fetch me data:', error);
      }

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
  const { setTokens, setMe } = useAuthStore();

  return useMutation({
    mutationFn: async ({ email, code }: { email: string; code: string }) => {
      const tokenResponse = await authApi.verifyLogin(email, code);
      return tokenResponse;
    },
    onSuccess: async (tokenResponse) => {
      setTokens(tokenResponse.accessToken, tokenResponse.refreshToken);

      // 로그인 후 즉시 me 데이터 가져오기
      try {
        const [authMe, profileMe] = await Promise.all([
          authApi.getMe(),
          profileApi.getMe().catch(() => null), // 프로필이 없을 수 있음
        ]);

        const combinedMe = {
          ...authMe,
          userId: profileMe?.userId ?? authMe.id,
          nickname: profileMe?.nickname ?? null,
          gender: profileMe?.gender ?? null,
          region: profileMe?.region ?? null,
          shortBio: profileMe?.shortBio ?? null,
          profileImageUrl: profileMe?.profileImageUrl ?? null,
          exp: profileMe?.exp ?? 0,
          level: profileMe?.level ?? 1,
          interests: profileMe?.interests ?? [],
          profileComplete: !!(profileMe?.nickname && profileMe?.gender),
        };

        setMe(combinedMe);
      } catch (error) {
        console.error('Failed to fetch me data:', error);
      }

      queryClient.invalidateQueries({ queryKey: [getQueryOptionAuthMe().queryKey[0]] });
    },
  });
};
