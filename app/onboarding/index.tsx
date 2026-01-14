import { router } from 'expo-router';

import { useTranslation } from '@/locales/useTranslation';

import InterestStep from './_components/InterestStep';
import OptionalStep from './_components/OptionalStep';
import ProfileFlowLayout from './_components/ProfileFlowLayout';
import ProfileStep from './_components/ProfileStep';
import { useProfileFlow, type ProfileFlowStep } from './_hooks/useProfileFlow';

const Onboarding: React.FC = () => {
  const { t } = useTranslation();

  const ONBOARDING_STEPS: { key: ProfileFlowStep; title: string; subtitle: string }[] = [
    {
      key: 'profile',
      title: t('onboarding.steps.profile.title'),
      subtitle: t('onboarding.steps.profile.subtitle'),
    },
    {
      key: 'interests',
      title: t('onboarding.steps.interests.title'),
      subtitle: t('onboarding.steps.interests.subtitle'),
    },
    {
      key: 'optional',
      title: t('onboarding.steps.optional.title'),
      subtitle: t('onboarding.steps.optional.subtitle'),
    },
  ];
  const { step, setStep, forms, handlers, mutation } = useProfileFlow({
    onSuccess: () => router.replace('/(tabs)'),
  });

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

  return (
    <ProfileFlowLayout step={step} steps={ONBOARDING_STEPS}>
      {renderContent()}
    </ProfileFlowLayout>
  );
};

export default Onboarding;
