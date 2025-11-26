import { router } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { YStack, XStack, Circle } from 'tamagui';

import { Typography } from '@/components/ui';
import { useUpdateProfile } from '@/queries/useMutationProfile';
import { useCommonStyle } from '@/styles/common';
import {
  NicknameGenderFormData,
  InterestsFormData,
  OptionalFieldsFormData,
} from '@/utils/validation/profileSchemas';

import InterestStep from './components/InterestStep';
import OptionalStep from './components/OptionalStep';
import ProfileStep from './components/ProfileStep';
import { useProfileForms } from './hooks/useProfileForms';

type OnboardingStep = 'profile' | 'interests' | 'optional';

const STEPS: { key: OnboardingStep; title: string; subtitle: string }[] = [
  { key: 'profile', title: '프로필 설정', subtitle: '기본 정보를 입력해주세요' },
  { key: 'interests', title: '관심사 선택', subtitle: '관심있는 주제를 선택해주세요' },
  { key: 'optional', title: '추가 정보', subtitle: '프로필을 더 풍성하게 만들어보세요' },
];

const Onboarding: React.FC = () => {
  const [step, setStep] = useState<OnboardingStep>('profile');
  const [profileData, setProfileData] = useState<NicknameGenderFormData | null>(null);
  const [interestsData, setInterestsData] = useState<InterestsFormData | null>(null);
  const [optionalData, setOptionalData] = useState<OptionalFieldsFormData | null>(null);

  const { fullscreen, defaultBackground } = useCommonStyle();

  const updateProfileMutation = useUpdateProfile({
    onSuccess: () => {
      router.replace('/(tabs)');
    },
  });

  const { profileForm, genderOptions, interestsForm, optionalForm } = useProfileForms();

  const currentStepIndex = STEPS.findIndex((s) => s.key === step);
  const currentStepInfo = STEPS[currentStepIndex];

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
    submitAll();
  };

  const submitAll = () => {
    if (!profileData || !interestsData) return;
    const data: {
      nickname: string;
      gender: 'male' | 'female' | 'other';
      interestIds: number[];
      region?: string;
      shortBio?: string;
    } = {
      nickname: profileData.nickname,
      gender: profileData.gender,
      interestIds: interestsData.interestIds,
    };

    if (optionalData?.region) {
      data.region = optionalData.region;
    }
    if (optionalData?.shortBio) {
      data.shortBio = optionalData.shortBio;
    }

    updateProfileMutation.mutate(data);
  };

  const renderStepIndicator = () => (
    <XStack gap="$2" justify="center" mb="$6">
      {STEPS.map((s, index) => (
        <Circle
          key={s.key}
          size={8}
          bg={index <= currentStepIndex ? '$primary' : '$gray300'}
          animation="quick"
        />
      ))}
    </XStack>
  );

  const renderContent = () => {
    if (step === 'profile') {
      return (
        <ProfileStep
          form={profileForm}
          genderOptions={genderOptions}
          handleSubmit={handleProfileSubmit}
        />
      );
    }

    if (step === 'interests') {
      return (
        <InterestStep
          form={interestsForm}
          handleSubmit={handleInterestsSubmit}
          handleBack={() => setStep('profile')}
        />
      );
    }

    if (step === 'optional') {
      return (
        <OptionalStep
          form={optionalForm}
          handleOptionalSubmit={handleOptionalSubmit}
          handleBack={() => setStep('interests')}
          isPending={updateProfileMutation.isPending}
          error={updateProfileMutation.error}
        />
      );
    }

    return null;
  };

  return (
    <SafeAreaView style={[fullscreen, defaultBackground]} edges={['top', 'bottom']}>
      <YStack flex={1} p="$4" bg="$background">
        {renderStepIndicator()}

        <YStack gap="$2" mb="$6">
          <Typography type="title">{currentStepInfo.title}</Typography>
          <Typography type="subtitle">{currentStepInfo.subtitle}</Typography>
        </YStack>

        {renderContent()}
      </YStack>
    </SafeAreaView>
  );
};

export default Onboarding;
