import { router } from 'expo-router';

import InterestStep from './components/InterestStep';
import OptionalStep from './components/OptionalStep';
import { ProfileFlowLayout } from './components/ProfileFlowLayout';
import ProfileStep from './components/ProfileStep';
import { useProfileFlow, type ProfileFlowStep } from './hooks/useProfileFlow';

const ONBOARDING_STEPS: { key: ProfileFlowStep; title: string; subtitle: string }[] = [
  { key: 'profile', title: '프로필 설정', subtitle: '기본 정보를 입력해주세요' },
  { key: 'interests', title: '관심사 선택', subtitle: '관심있는 주제를 선택해주세요' },
  { key: 'optional', title: '추가 정보', subtitle: '프로필을 더 풍성하게 만들어보세요' },
];

const Onboarding: React.FC = () => {
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
