import { ProfileMe } from '@/models/user';

import { apiClient } from './client';
import { handleApiError } from './error';

interface GetMyProfileResponse {
  profile: ProfileMe;
}

interface UpdateProfileRequest {
  nickname?: string;
  gender?: 'male' | 'female' | 'other';
  region?: string;
  shortBio?: string;
  profileImageUrl?: string;
  interestIds?: number[];
}

interface UpdateProfileResponse {
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

  updateMe: async (data: UpdateProfileRequest): Promise<ProfileMe> => {
    try {
      const response = await apiClient.patch<UpdateProfileResponse>('/profiles/me', data);
      return response.data.profile;
    } catch (error) {
      throw handleApiError(error);
    }
  },
};
