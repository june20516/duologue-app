import { useController, UseFormReturn } from 'react-hook-form';
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';
import { ScrollView, XStack, YStack } from 'tamagui';

import { Badge, Button, Spinner, Typography } from '@/components/ui';
import { useQueryInterests } from '@/queries/useQueryInterests';
import { fullscreen } from '@/styles/common';
import { InterestsFormData } from '@/utils/validation/profileSchemas';

interface InterestStepProps {
  form: UseFormReturn<InterestsFormData>;
  handleBack: () => void;
  handleSubmit: (data: InterestsFormData) => void;
}
const InterestStep = ({ form, handleBack, handleSubmit }: InterestStepProps) => {
  const { data: interests, isLoading: isLoadingInterests } = useQueryInterests();
  const { field: selectedInterestIdsField } = useController({
    control: form.control,
    name: 'interestIds',
  });

  const selectedInterestIds = selectedInterestIdsField.value;

  const toggleInterest = (interestId: number) => {
    const currentIds = selectedInterestIds || [];
    const isSelected = currentIds.includes(interestId);

    if (isSelected) {
      // 선택 해제
      const newIds = currentIds.filter((id) => id !== interestId);
      form.setValue('interestIds', newIds);
    } else if (currentIds.length < 5) {
      // 최대 5개까지만 추가
      const newIds = [...currentIds, interestId];
      form.setValue('interestIds', newIds);
    }
    // 5개 이상이면 아무 동작도 하지 않음
  };
  const groupedInterests =
    interests?.reduce(
      (acc, interest) => {
        const category = interest.categoryDisplayName;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(interest);
        return acc;
      },
      {} as Record<string, typeof interests>
    ) || {};

  if (isLoadingInterests) {
    return (
      <YStack flex={1} justify="center" items="center">
        <Spinner size="medium" />
        <Typography mt="$4">관심사 목록을 불러오는 중...</Typography>
      </YStack>
    );
  }

  return (
    <Animated.View entering={FadeInRight} exiting={FadeOutLeft} style={[fullscreen]}>
      <YStack flex={1} gap="$4">
        <ScrollView style={[fullscreen]} showsVerticalScrollIndicator={false}>
          <YStack gap="$4" pb="$4">
            {Object.entries(groupedInterests).map(([category, categoryInterests]) => (
              <YStack key={category} gap="$2">
                <Typography type="semiBold" color="$gray700">
                  {category}
                </Typography>
                <XStack gap="$2" flexWrap="wrap">
                  {categoryInterests.map((interest) => {
                    const isSelected = selectedInterestIds?.includes(interest.id);
                    return (
                      <Button
                        key={interest.id}
                        variant={isSelected ? 'filled' : 'outline'}
                        priority={isSelected ? 'primary' : 'secondary'}
                        size="sm"
                        onPress={() => toggleInterest(interest.id)}
                      >
                        {interest.displayName}
                      </Button>
                    );
                  })}
                </XStack>
              </YStack>
            ))}
          </YStack>
        </ScrollView>

        {form.formState.errors.interestIds && (
          <Typography type="caption" color="$error">
            {form.formState.errors.interestIds.message}
          </Typography>
        )}

        <XStack gap="$2">
          <Button variant="outline" flex={1} onPress={handleBack}>
            이전
          </Button>
          <Button
            flex={2}
            onPress={form.handleSubmit(handleSubmit)}
            disabled={!form.formState.isValid}
          >
            <XStack gap="$2" items="center" justify="center">
              <Typography>다음</Typography>
              {Boolean(selectedInterestIds?.length) && (
                <Badge count={selectedInterestIds?.length || 0} color="secondary" />
              )}
            </XStack>
          </Button>
        </XStack>
      </YStack>
    </Animated.View>
  );
};

export default InterestStep;
