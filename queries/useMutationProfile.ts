import { useMutation, useQueryClient } from '@tanstack/react-query';

import { profileApi } from '@/api/profile';
import { useAuthStore } from '@/stores/authStore';

import { getQueryOptionAuthMe } from './useQueryAuth';

interface UseUpdateProfileOptions {
  onSuccess?: () => void;
}

export const useUpdateProfile = (options?: UseUpdateProfileOptions) => {
  const queryClient = useQueryClient();
  const { setMe } = useAuthStore();

  return useMutation({
    mutationFn: profileApi.updateMe,
    onSuccess: (updatedProfile) => {
      const me = useAuthStore.getState().me;
      if (me) {
        setMe({
          ...me,
          ...updatedProfile,
          profileComplete: !!(updatedProfile.nickname && updatedProfile.gender),
        });
      }
      queryClient.invalidateQueries({ queryKey: [getQueryOptionAuthMe().queryKey[0]] });
      options?.onSuccess?.();
    },
  });
};
