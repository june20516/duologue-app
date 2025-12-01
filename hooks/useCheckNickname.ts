import { useQuery } from '@tanstack/react-query';

import { profileApi } from '@/api/profile';

export const useCheckNickname = (nickname: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: ['checkNickname', nickname],
    queryFn: () => profileApi.checkNickname(nickname),
    enabled: enabled && nickname.length > 0,
    staleTime: 0,
    retry: false,
  });
};
