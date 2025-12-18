import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { YStack, XStack, ScrollView } from 'tamagui';

import InterestStep from '@/app/onboarding/components/InterestStep';
import OptionalStep from '@/app/onboarding/components/OptionalStep';
import { ProfileFlowLayout } from '@/app/onboarding/components/ProfileFlowLayout';
import ProfileStep from '@/app/onboarding/components/ProfileStep';
import { useProfileFlow, type ProfileFlowStep } from '@/app/onboarding/hooks/useProfileFlow';
import { Button, Spinner, Typography } from '@/components/ui';
import { useQueryProfileMe } from '@/queries/useQueryProfile';
import { useCommonStyle } from '@/styles/common';

const EDIT_STEPS: { key: ProfileFlowStep; title: string; subtitle: string }[] = [
  { key: 'profile', title: '기본 정보', subtitle: '닉네임과 성별을 수정하세요' },
  { key: 'interests', title: '관심사 선택', subtitle: '관심있는 주제를 선택해주세요' },
  { key: 'optional', title: '추가 정보', subtitle: '지역과 한줄소개를 수정하세요' },
];

const EditProfile: React.FC = () => {
  const { data: currentProfile, isLoading } = useQueryProfileMe();
  const { fullscreen, defaultBackground } = useCommonStyle();

  const { step, setStep, forms, handlers, mutation } = useProfileFlow({
    initialData: currentProfile,
    onSuccess: () => router.back(),
  });

  if (isLoading) {
    return (
      <SafeAreaView style={[fullscreen, defaultBackground]}>
        <YStack flex={1} justify="center" items="center">
          <Spinner size="medium" />
          <Typography mt="$4">프로필을 불러오는 중...</Typography>
        </YStack>
      </SafeAreaView>
    );
  }

  const renderContent = () => {
    if (step === 'profile') {
      return (
        <ProfileStep
          form={forms.profileForm}
          genderOptions={forms.genderOptions}
          handleSubmit={handlers.handleProfileSubmit}
        />
      );
    }

    if (step === 'interests') {
      return (
        <InterestStep
          form={forms.interestsForm}
          handleSubmit={handlers.handleInterestsSubmit}
          handleBack={() => setStep('profile')}
        />
      );
    }

    if (step === 'optional') {
      return (
        <OptionalStep
          form={forms.optionalForm}
          handleOptionalSubmit={handlers.handleOptionalSubmit}
          handleBack={() => setStep('interests')}
          isPending={mutation.isPending}
          error={mutation.error}
        />
      );
    }

    return null;
  };

  const header = (
    <XStack justify="space-between" items="center" mb="$4">
      <Typography type="title">프로필 수정</Typography>
      <Button variant="ghost" priority="secondary" onPress={() => router.back()}>
        취소
      </Button>
    </XStack>
  );

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <ProfileFlowLayout step={step} steps={EDIT_STEPS} header={header}>
        {renderContent()}
      </ProfileFlowLayout>
    </ScrollView>
  );
};

export default EditProfile;
