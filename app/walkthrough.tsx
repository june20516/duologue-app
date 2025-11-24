import { router } from 'expo-router';
import { useState } from 'react';
import { YStack } from 'tamagui';

import { Button, Typography } from '@/components/ui';
import { useAppStore } from '@/stores/appStore';

const Walkthrough = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const setFirstLaunch = useAppStore((state) => state.setFirstLaunch);

  // TODO: Phase 1에서 실제 워크스루 컨텐츠 추가
  const pages = [
    { title: '환영합니다', description: 'Duologue에 오신 것을 환영합니다' },
    { title: '대화하세요', description: 'AI와 자연스러운 대화를 나누세요' },
    { title: '학습하세요', description: '대화를 통해 언어를 배우세요' },
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setFirstLaunch(false);
      router.replace('/login');
    }
  };

  const handleSkip = () => {
    setFirstLaunch(false);
    router.replace('/login');
  };

  return (
    <YStack flex={1} p="$4" justify="space-between" bg="$background">
      <Button self="flex-end" onPress={handleSkip} variant="ghost" priority="secondary">
        건너뛰기
      </Button>

      <YStack flex={1} justify="center" items="center" gap="$4">
        <Typography type="title">{pages[currentPage].title}</Typography>
        <Typography type="semiBold">{pages[currentPage].description}</Typography>
        <Typography>
          {currentPage + 1} / {pages.length}
        </Typography>
      </YStack>

      <Button onPress={handleNext}>{currentPage === pages.length - 1 ? '시작하기' : '다음'}</Button>
    </YStack>
  );
};

export default Walkthrough;
