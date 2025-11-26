import { router } from 'expo-router';
import { useState } from 'react';
import { YStack } from 'tamagui';

import { Button, Input, Typography } from '@/components/ui';
import { useAuthStore } from '@/stores/authStore';

const Onboarding = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const updateProfile = useAuthStore((state) => state.updateProfile);

  const handleComplete = () => {
    // TODO: Phase 1에서 실제 프로필 입력 및 검증 추가
    updateProfile({
      nickname: name || null,
      gender: age ? 'other' : null, // 임시 - 실제로는 gender 선택 필요
    });

    router.push('/index');
  };

  const isValid = name.trim().length > 0 && age.trim().length > 0;

  return (
    <YStack flex={1} p="$4" justify="center" gap="$4" bg="$background">
      <YStack gap="$2" mb="$4">
        <Typography type="title">프로필 설정</Typography>
        <Typography type="subtitle">기본 정보를 입력해주세요</Typography>
      </YStack>

      <YStack gap="$4">
        <YStack gap="$2">
          <Typography type="semiBold">이름</Typography>
          <Input placeholder="이름을 입력하세요" value={name} onChangeText={setName} />
        </YStack>

        <YStack gap="$2">
          <Typography type="semiBold">나이</Typography>
          <Input
            placeholder="나이를 입력하세요"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />
        </YStack>

        {/* TODO: Phase 1에서 추가 필드 구현 (관심사, 학습 목표 등) */}
      </YStack>

      <Button onPress={handleComplete} disabled={!isValid} opacity={isValid ? 1 : 0.5} mt="$4">
        완료
      </Button>
    </YStack>
  );
};

export default Onboarding;
