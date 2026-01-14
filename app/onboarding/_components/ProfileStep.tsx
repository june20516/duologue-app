import { useEffect, useState } from 'react';
import { useController, UseFormReturn } from 'react-hook-form';
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';
import { YStack, XStack, ScrollView } from 'tamagui';

import FormInput from '@/components/form/FormInput';
import { Button, Typography } from '@/components/ui';
import { useCheckNickname } from '@/hooks/useCheckNickname';
import { useTranslation } from '@/locales/useTranslation';
import { fullscreen } from '@/styles/common';
import { NicknameGenderFormData } from '@/utils/validation/profileSchemas';

interface ProfileStepProps {
  form: UseFormReturn<NicknameGenderFormData>;
  genderOptions: { value: 'male' | 'female' | 'other'; label: string }[];
  handleSubmit: (data: NicknameGenderFormData) => void;
}

const ProfileStep = ({ form, genderOptions, handleSubmit }: ProfileStepProps) => {
  const { t } = useTranslation();
  const { field: gender } = useController({
    control: form.control,
    name: 'gender',
  });

  const nickname = form.watch('nickname');
  const [debouncedNickname, setDebouncedNickname] = useState('');

  const {
    data: isAvailable,
    isLoading: isCheckingNickname,
    isError: isNicknameCheckError,
  } = useCheckNickname(debouncedNickname, debouncedNickname.length > 0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedNickname(nickname || '');
    }, 500);

    return () => clearTimeout(timer);
  }, [nickname]);

  const getNicknameHelperText = () => {
    if (!debouncedNickname) return null;
    if (isCheckingNickname) return t('onboarding.profile.nickname.checking');
    if (isNicknameCheckError) return t('onboarding.profile.nickname.checkFailed');
    if (isAvailable === true) return t('onboarding.profile.nickname.available');
    if (isAvailable === false) return t('onboarding.profile.nickname.unavailable');
    return null;
  };

  const getNicknameHelperColor = () => {
    if (isAvailable === true) return '$success';
    if (isAvailable === false || isNicknameCheckError) return '$error';
    return '$gray600';
  };

  return (
    <Animated.View entering={FadeInRight} exiting={FadeOutLeft} style={[fullscreen]}>
      <YStack flex={1} gap="$4">
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <YStack gap="$4" pb="$4">
            <YStack gap="$2">
              <FormInput
                control={form.control}
                name="nickname"
                label={t('onboarding.profile.nickname.label')}
                placeholder={t('onboarding.profile.nickname.placeholder')}
                autoCapitalize="none"
              />
              {getNicknameHelperText() && (
                <Typography type="caption" color={getNicknameHelperColor()}>
                  {getNicknameHelperText()}
                </Typography>
              )}
            </YStack>

            <YStack gap="$2">
              <Typography type="semiBold">{t('onboarding.profile.gender.label')}</Typography>
              <XStack gap="$2">
                {genderOptions.map((option) => {
                  return (
                    <Button
                      key={option.value}
                      variant={gender.value === option.value ? 'filled' : 'outline'}
                      priority={gender.value === option.value ? 'primary' : 'secondary'}
                      flex={1}
                      onPress={() =>
                        form.setValue('gender', option.value, { shouldValidate: true })
                      }
                    >
                      {option.label}
                    </Button>
                  );
                })}
              </XStack>
              {form.formState.errors.gender && (
                <Typography type="caption" color="$error">
                  {form.formState.errors.gender.message}
                </Typography>
              )}
            </YStack>
          </YStack>
        </ScrollView>

        <Button
          onPress={form.handleSubmit(handleSubmit)}
          disabled={
            !form.formState.isValid ||
            isAvailable === false ||
            isCheckingNickname ||
            isNicknameCheckError
          }
        >
          {t('onboarding.buttons.next')}
        </Button>
      </YStack>
    </Animated.View>
  );
};

export default ProfileStep;
