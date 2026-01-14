import { UseFormReturn } from 'react-hook-form';
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';
import { ScrollView, XStack, YStack } from 'tamagui';

import FormInput from '@/components/form/FormInput';
import { Button, Typography } from '@/components/ui';
import { useTranslation } from '@/locales/useTranslation';
import { fullscreen } from '@/styles/common';
import { OptionalFieldsFormData } from '@/utils/validation/profileSchemas';

interface OptionalStepProps {
  form: UseFormReturn<OptionalFieldsFormData>;
  handleOptionalSubmit: (data: OptionalFieldsFormData) => void;
  handleBack: () => void;
  isPending: boolean;
  error: Error | null;
}

const OptionalStep = ({
  form,
  handleOptionalSubmit,
  handleBack,
  isPending,
  error,
}: OptionalStepProps) => {
  const { t } = useTranslation();

  return (
    <Animated.View entering={FadeInRight} exiting={FadeOutLeft} style={[fullscreen]}>
      <YStack flex={1} gap="$4">
        <ScrollView style={[fullscreen]} showsVerticalScrollIndicator={false}>
          <YStack gap="$4" pb="$4">
            <YStack gap="$2">
              <FormInput
                control={form.control}
                name="region"
                label={t('onboarding.optional.region.label')}
                placeholder={t('onboarding.optional.region.placeholder')}
              />
            </YStack>

            <YStack gap="$2">
              <FormInput
                control={form.control}
                name="shortBio"
                label={t('onboarding.optional.shortBio.label')}
                placeholder={t('onboarding.optional.shortBio.placeholder')}
                multiline
                minH="$8"
              />
            </YStack>
          </YStack>
        </ScrollView>

        {error && (
          <Typography type="caption" color="$error">
            {error.message}
          </Typography>
        )}

        <XStack gap="$2">
          <Button flex={1} variant="outline" onPress={handleBack}>
            {t('onboarding.buttons.previous')}
          </Button>
          <Button
            flex={2}
            onPress={form.handleSubmit(handleOptionalSubmit)}
            loading={isPending}
            disabled={isPending}
          >
            {t('onboarding.buttons.complete')}
          </Button>
        </XStack>
      </YStack>
    </Animated.View>
  );
};

export default OptionalStep;
