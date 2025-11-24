import { router } from 'expo-router';
import { YStack } from 'tamagui';

import { Button, Typography } from '@/components/ui';
import { useAuthStore } from '@/stores/authStore';

const Login = () => {
  const setTokens = useAuthStore((state) => state.setTokens);

  const handleLogin = () => {
    // TODO: Phase 1에서 실제 로그인 로직 구현
    // 임시로 더미 토큰 설정
    setTokens('dummy-access-token', 'dummy-refresh-token');
    // index로 이동하여 프로필 체크 후 온보딩으로 라우팅
    router.replace('/');
  };

  return (
    <YStack flex={1} justify="center" items="center" p="$4" gap="$4">
      <Typography type="title">Duologue</Typography>
      <Typography color="$colorSoft">로그인이 필요합니다</Typography>
      <Button onPress={handleLogin}>로그인 (임시)</Button>
    </YStack>
  );
};

export default Login;
