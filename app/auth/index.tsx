import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { YStack } from 'tamagui';

import { Button, Typography } from '@/components/ui';
import { useTranslation } from '@/locales/useTranslation';
import { useCommonStyle } from '@/styles/common';

const Index = () => {
  const { fullscreen } = useCommonStyle();
  const { t } = useTranslation();

  const handleSignin = () => {
    router.push('/auth/signin');
  };

  const handleSignup = () => {
    router.push('/auth/signup');
  };

  return (
    <SafeAreaView style={[fullscreen]}>
      <YStack flex={1} justify="center" items="center" p="$4" gap="$4">
        <YStack gap="$2" items="center">
          <Typography type="title">{t('auth.index.title')}</Typography>
          <Typography color="$colorSoft">{t('auth.index.description')}</Typography>
        </YStack>

        <YStack gap="$3" width="100%" maxW={400}>
          <Button variant="filled" priority="primary" size="lg" onPress={handleSignup}>
            {t('auth.index.signupButton')}
          </Button>
          <Button variant="outline" priority="secondary" size="lg" onPress={handleSignin}>
            {t('auth.index.loginButton')}
          </Button>
        </YStack>
      </YStack>
    </SafeAreaView>
  );
};

export default Index;
