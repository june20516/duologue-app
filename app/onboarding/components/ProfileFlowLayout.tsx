import { SafeAreaView } from 'react-native-safe-area-context';
import { YStack, XStack, Circle } from 'tamagui';

import { Typography } from '@/components/ui';
import { useCommonStyle } from '@/styles/common';

import type { ProfileFlowStep } from '../hooks/useProfileFlow';

interface StepInfo {
  key: ProfileFlowStep;
  title: string;
  subtitle: string;
}

interface ProfileFlowLayoutProps {
  step: ProfileFlowStep;
  steps: StepInfo[];
  children: React.ReactNode;
  header?: React.ReactNode;
}

export const ProfileFlowLayout: React.FC<ProfileFlowLayoutProps> = ({
  step,
  steps,
  children,
  header,
}) => {
  const { fullscreen, defaultBackground } = useCommonStyle();
  const currentStepIndex = steps.findIndex((s) => s.key === step);
  const currentStepInfo = steps[currentStepIndex];

  return (
    <SafeAreaView style={[fullscreen, defaultBackground]} edges={['top', 'bottom']}>
      <YStack flex={1} p="$4" bg="$background">
        {/* Optional Header */}
        {header}

        {/* Step Indicator */}
        <XStack gap="$2" justify="center" mb="$6">
          {steps.map((s, index) => (
            <Circle
              key={s.key}
              size={8}
              bg={index <= currentStepIndex ? '$primary' : '$gray300'}
              animation="quick"
            />
          ))}
        </XStack>

        {/* Step Info */}
        <YStack gap="$2" mb="$6">
          <Typography type="title">{currentStepInfo.title}</Typography>
          <Typography type="subtitle">{currentStepInfo.subtitle}</Typography>
        </YStack>

        {/* Content */}
        {children}
      </YStack>
    </SafeAreaView>
  );
};
