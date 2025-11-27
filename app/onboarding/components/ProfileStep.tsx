import { useController, UseFormReturn } from 'react-hook-form';
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';
import { YStack, XStack, ScrollView } from 'tamagui';

import FormInput from '@/components/form/FormInput';
import { Button, Typography } from '@/components/ui';
import { fullscreen } from '@/styles/common';
import { NicknameGenderFormData } from '@/utils/validation/profileSchemas';

interface ProfileStepProps {
  form: UseFormReturn<NicknameGenderFormData>;
  genderOptions: { value: 'male' | 'female' | 'other'; label: string }[];
  handleSubmit: (data: NicknameGenderFormData) => void;
}

const ProfileStep = ({ form, genderOptions, handleSubmit }: ProfileStepProps) => {
  const { field: gender } = useController({
    control: form.control,
    name: 'gender',
  });
  return (
    <Animated.View entering={FadeInRight} exiting={FadeOutLeft} style={[fullscreen]}>
      <YStack flex={1} gap="$4">
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <YStack gap="$4" pb="$4">
            <YStack gap="$2">
              <FormInput
                control={form.control}
                name="nickname"
                label="닉네임"
                placeholder="닉네임을 입력하세요"
                autoCapitalize="none"
              />
            </YStack>

            <YStack gap="$2">
              <Typography type="semiBold">성별</Typography>
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

        <Button onPress={form.handleSubmit(handleSubmit)} disabled={!form.formState.isValid}>
          다음
        </Button>
      </YStack>
    </Animated.View>
  );
};

export default ProfileStep;
