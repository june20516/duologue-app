import { create } from '@bufbuild/protobuf';

import { GetInterestsRequestSchema } from '@/gen/duologue/v1/interest_pb';
import type { Interest } from '@/models/user';

import { handleConnectError } from './connectError';
import { mapInterest } from './mappers';
import { interestClient } from './transport';

export const interestApi = {
  getAll: async (): Promise<Interest[]> => {
    try {
      const request = create(GetInterestsRequestSchema, {});
      const response = await interestClient.getInterests(request);
      return response.interests.map(mapInterest);
    } catch (error) {
      throw handleConnectError(error);
    }
  },
};
