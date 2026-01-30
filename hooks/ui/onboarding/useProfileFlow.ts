import { useEffect, useState } from 'react';

import type { ProfileMe } from '@/models/user';
import { useUpdateProfile } from '@/queries/useMutationProfile';
import type { Gender } from '@/types/gender';
import {
  NicknameGenderFormData,
  InterestsFormData,
  OptionalFieldsFormData,
} from '@/utils/validation/profileSchemas';

import useProfileForms from './useProfileForms';

export type ProfileFlowStep = 'profile' | 'interests' | 'optional';

interface UseProfileFlowOptions {
  initialData?: ProfileMe | null;
  onSuccess: () => void;
}

export const useProfileFlow = ({ initialData, onSuccess }: UseProfileFlowOptions) => {
  const [step, setStep] = useState<ProfileFlowStep>('profile');
  const [profileData, setProfileData] = useState<NicknameGenderFormData | null>(null);
  const [interestsData, setInterestsData] = useState<InterestsFormData | null>(null);
  const [optionalData, setOptionalData] = useState<OptionalFieldsFormData | null>(null);

  const { profileForm, genderOptions, interestsForm, optionalForm } = useProfileForms();

  const updateProfileMutation = useUpdateProfile({ onSuccess });

  // 기존 프로필 데이터 로드 (edit 모드)
  useEffect(() => {
    if (initialData) {
      profileForm.setValue('nickname', initialData.nickname || '', { shouldValidate: true });
      profileForm.setValue('gender', initialData.gender || 'male', { shouldValidate: true });

      interestsForm.setValue('interestIds', initialData.interests?.map((i) => i.id) || [], {
        shouldValidate: true,
      });

      optionalForm.setValue('region', initialData.region || '', { shouldValidate: true });
      optionalForm.setValue('shortBio', initialData.shortBio || '', { shouldValidate: true });
    }
  }, [initialData, profileForm, interestsForm, optionalForm]);

  const handleProfileSubmit = (data: NicknameGenderFormData) => {
    setProfileData(data);
    setStep('interests');
  };

  const handleInterestsSubmit = (data: InterestsFormData) => {
    setInterestsData(data);
    setStep('optional');
  };

  const handleOptionalSubmit = (data: OptionalFieldsFormData) => {
    setOptionalData(data);
    submitAll(data);
  };

  const submitAll = (optional?: OptionalFieldsFormData) => {
    if (!profileData || !interestsData) return;

    const finalOptional = optional || optionalData;

    const data: {
      nickname: string;
      gender: Gender;
      interestIds: number[];
      region?: string;
      shortBio?: string;
    } = {
      nickname: profileData.nickname,
      gender: profileData.gender,
      interestIds: interestsData.interestIds,
    };

    if (finalOptional?.region) {
      data.region = finalOptional.region;
    }
    if (finalOptional?.shortBio) {
      data.shortBio = finalOptional.shortBio;
    }

    updateProfileMutation.mutate(data);
  };

  return {
    // State
    step,
    setStep,

    // Forms
    forms: {
      profileForm,
      genderOptions,
      interestsForm,
      optionalForm,
    },

    // Handlers
    handlers: {
      handleProfileSubmit,
      handleInterestsSubmit,
      handleOptionalSubmit,
    },

    // Mutation
    mutation: updateProfileMutation,
  };
};
