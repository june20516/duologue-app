import { create } from '@bufbuild/protobuf';

import {
  CheckNicknameRequestSchema,
  GetMyProfileRequestSchema,
  UpdateMyProfileRequestSchema,
} from '@/gen/duologue/v1/profile_pb';
import type { ProfileMe } from '@/models/user';
import type { Gender } from '@/types/gender';

import { handleConnectError } from './connectError';
import { genderToProtoGender, mapProfile } from './mappers';
import { profileClient } from './transport';

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

  updateMe: async (data: {
    nickname?: string;
    gender?: Gender;
    region?: string;
    shortBio?: string;
    profileImageUrl?: string;
    interestIds?: number[];
  }): Promise<ProfileMe> => {
    try {
      const request = create(UpdateMyProfileRequestSchema, {
        nickname: data.nickname,
        gender: genderToProtoGender(data.gender),
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
