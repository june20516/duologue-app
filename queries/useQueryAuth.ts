import { useQueries, UseQueryOptions } from '@tanstack/react-query';
import { useEffect } from 'react';

import { authApi } from '@/api/auth';
import { profileApi } from '@/api/profile';
import { AuthMe, Me, ProfileMe } from '@/models/user';
import { useAuthStore } from '@/stores/authStore';

export type QueryOptionParams<T, E> = Omit<UseQueryOptions<T, E>, 'queryKey' | 'queryFn'>;
export type GetQueryOption<T, E> = (options?: QueryOptionParams<T, E>) => UseQueryOptions<T, E>;

export const getQueryOptionAuthMe: GetQueryOption<AuthMe, Error> = (options) => {
  return {
    queryKey: ['me', 'auth'],
    queryFn: () => authApi.getMe(),
    ...options,
  };
};

export const getQueryOptionProfileMe: GetQueryOption<ProfileMe, Error> = (options) => {
  return {
    queryKey: ['me', 'profile'],
    queryFn: () => profileApi.getMe(),
    ...options,
  };
};

export const useQueriesMe = (options?: QueryOptionParams<AuthMe | ProfileMe, Error>) => {
  const { setMe } = useAuthStore();
  const queriesResult = useQueries({
    queries: [
      getQueryOptionAuthMe(options as QueryOptionParams<AuthMe, Error>),
      getQueryOptionProfileMe(options as QueryOptionParams<ProfileMe, Error>),
    ],
    combine: (results) => {
      const isPending = results.some((r) => r.isPending);
      const isError = results.some((r) => r.isError);

      const authMe = results[0].data;
      const profileMe = results[1].data;

      // 파생 데이터 생성 로직 (Data A)
      const combinedData = authMe && profileMe ? combineAuthAndProfile(authMe, profileMe) : null;

      // 플래그 계산 (예: 데이터 A의 특정 값이 true면 플래그 on)
      const lastUpdatedAt = combinedData
        ? Math.max(results[0].dataUpdatedAt, results[1].dataUpdatedAt)
        : null;

      return {
        me: combinedData,
        lastUpdatedAt,
        isPending,
        isError,
      };
    },
  });

  useEffect(() => {
    if (typeof queriesResult === 'undefined') return;
    if (!queriesResult.me) return;
    setMe(queriesResult.me);
  }, [queriesResult, setMe]);
};

const combineAuthAndProfile = (auth: AuthMe, profile: ProfileMe): Me => {
  return {
    ...auth,
    ...profile,
    profileComplete: !!(profile.nickname && profile.gender),
  };
};
