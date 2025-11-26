import { ProfileMe } from '@/models/user';

import { apiClient } from './client';
import { handleApiError } from './error';

interface GetMyProfileResponse {
  profile: ProfileMe;
}

export const profileApi = {
  getMe: async (): Promise<ProfileMe> => {
    try {
      const response = await apiClient.get<GetMyProfileResponse>('/profiles/me');
      return response.data.profile;
    } catch (error) {
      throw handleApiError(error);
    }
  },
};
