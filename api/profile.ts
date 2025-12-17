import { create } from '@bufbuild/protobuf';

import {
  CheckNicknameRequestSchema,
  GetMyProfileRequestSchema,
  UpdateMyProfileRequestSchema,
} from '@/gen/duologue/v1/profile_pb';
import type { ProfileMe } from '@/models/user';

import { handleConnectError } from './connectError';
import { mapProfile } from './mappers';
import { profileClient } from './transport';

interface UpdateProfileRequest {
  nickname?: string;
  gender?: 'male' | 'female' | 'other';
  region?: string;
  shortBio?: string;
  profileImageUrl?: string;
  interestIds?: number[];
}

export const profileApi = {
  getMe: async (): Promise<ProfileMe> => {
    try {
      const request = create(GetMyProfileRequestSchema, {});
      const response = await profileClient.getMyProfile(request);
      if (!response.profile) {
        throw new Error('Profile not found');
      }
      return mapProfile(response.profile);
    } catch (error) {
      throw handleConnectError(error);
    }
  },

  updateMe: async (data: UpdateProfileRequest): Promise<ProfileMe> => {
    try {
      const request = create(UpdateMyProfileRequestSchema, {
        nickname: data.nickname,
        gender: data.gender,
        region: data.region,
        shortBio: data.shortBio,
        profileImageUrl: data.profileImageUrl,
        interestIds: data.interestIds?.map((id) => BigInt(id)) ?? [],
      });
      const response = await profileClient.updateMyProfile(request);
      if (!response.profile) {
        throw new Error('Profile not found');
      }
      return mapProfile(response.profile);
    } catch (error) {
      throw handleConnectError(error);
    }
  },

  checkNickname: async (nickname: string): Promise<boolean> => {
    try {
      const request = create(CheckNicknameRequestSchema, { nickname });
      const response = await profileClient.checkNickname(request);
      return response.available;
    } catch (error) {
      throw handleConnectError(error);
    }
  },
};
