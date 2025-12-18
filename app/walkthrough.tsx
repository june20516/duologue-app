import { router } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import { YStack } from 'tamagui';

import { Button, Typography } from '@/components/ui';
import { useAppStore } from '@/stores/appStore';
import { useCommonStyle } from '@/styles/common';

const Walkthrough = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const setFirstLaunch = useAppStore((state) => state.setFirstLaunch);
  const { fullscreen, defaultBackground } = useCommonStyle();
  const { t } = useTranslation();

  // TODO: Phase 1에서 실제 워크스루 컨텐츠 추가
  const pages = [
    {
      title: t('onboarding.walkthrough.page1.title'),
      description: t('onboarding.walkthrough.page1.description'),
    },
    {
      title: t('onboarding.walkthrough.page2.title'),
      description: t('onboarding.walkthrough.page2.description'),
    },
    {
      title: t('onboarding.walkthrough.page3.title'),
      description: t('onboarding.walkthrough.page3.description'),
    },
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      setFirstLaunch(false);
      router.replace('/');
    }
  };

  const handleSkip = () => {
    setFirstLaunch(false);
    router.replace('/');
  };

  return (
    <SafeAreaView style={[fullscreen, defaultBackground]}>
      <YStack flex={1} p="$4" justify="space-between">
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

        <Button onPress={handleNext}>
          {currentPage === pages.length - 1 ? '시작하기' : '다음'}
        </Button>
      </YStack>
    </SafeAreaView>
  );
};

export default Walkthrough;
