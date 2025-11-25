import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { YStack } from 'tamagui';

import { Button, Typography } from '@/components/ui';
import { useCommonStyle } from '@/styles/common';

const TEXTS = {
  title: 'Duologue',
  description: '이메일로 간편하게 시작하세요',
  loginButton: '로그인',
  signupButton: '회원가입',
};

const Index = () => {
  const { fullscreen } = useCommonStyle();
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
          <Typography type="title">{TEXTS.title}</Typography>
          <Typography color="$colorSoft">{TEXTS.description}</Typography>
        </YStack>

        <YStack gap="$3" width="100%" maxW={400}>
          <Button variant="filled" priority="primary" size="lg" onPress={handleSignup}>
            {TEXTS.signupButton}
          </Button>
          <Button variant="outline" priority="secondary" size="lg" onPress={handleSignin}>
            {TEXTS.loginButton}
          </Button>
        </YStack>
      </YStack>
    </SafeAreaView>
  );
};

export default Index;
