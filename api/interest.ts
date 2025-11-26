import { Interest } from '@/models/user';

import { apiClient } from './client';
import { handleApiError } from './error';

interface GetInterestsResponse {
  interests: Interest[];
}

export const interestApi = {
  getAll: async (): Promise<Interest[]> => {
    try {
      const response = await apiClient.get<GetInterestsResponse>('/interests');
      return response.data.interests;
    } catch (error) {
      throw handleApiError(error);
    }
  },
};
