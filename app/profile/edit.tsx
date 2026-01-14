import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { YStack, XStack, ScrollView } from 'tamagui';

import InterestStep from '@/app/onboarding/_components/InterestStep';
import OptionalStep from '@/app/onboarding/_components/OptionalStep';
import ProfileFlowLayout from '@/app/onboarding/_components/ProfileFlowLayout';
import ProfileStep from '@/app/onboarding/_components/ProfileStep';
import { useProfileFlow, type ProfileFlowStep } from '@/app/onboarding/_hooks/useProfileFlow';
import { Button, Spinner, Typography } from '@/components/ui';
import { useTranslation } from '@/locales/useTranslation';
import { useQueryProfileMe } from '@/queries/useQueryProfile';
import { useCommonStyle } from '@/styles/common';

const EditProfile: React.FC = () => {
  const { t } = useTranslation();
  const { data: currentProfile, isLoading } = useQueryProfileMe();
  const { fullscreen, defaultBackground } = useCommonStyle();

  const EDIT_STEPS: { key: ProfileFlowStep; title: string; subtitle: string }[] = [
    {
      key: 'profile',
      title: t('profile.edit.steps.profile.title'),
      subtitle: t('profile.edit.steps.profile.subtitle'),
    },
    {
      key: 'interests',
      title: t('profile.edit.steps.interests.title'),
      subtitle: t('profile.edit.steps.interests.subtitle'),
    },
    {
      key: 'optional',
      title: t('profile.edit.steps.optional.title'),
      subtitle: t('profile.edit.steps.optional.subtitle'),
    },
  ];

  const { step, setStep, forms, handlers, mutation } = useProfileFlow({
    initialData: currentProfile,
    onSuccess: () => router.back(),
  });

  if (isLoading) {
    return (
      <SafeAreaView style={[fullscreen, defaultBackground]}>
        <YStack flex={1} justify="center" items="center">
          <Spinner size="medium" />
          <Typography mt="$4">{t('profile.edit.loading')}</Typography>
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
      <Typography type="title">{t('profile.edit.title')}</Typography>
      <Button variant="ghost" priority="secondary" onPress={() => router.back()}>
        {t('profile.edit.cancel')}
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
