import { Redirect } from 'expo-router';
import { YStack } from 'tamagui';

import { Spinner } from '@/components/ui';
import { useQueriesMe } from '@/queries/useQueryAuth';
import { useAppStore } from '@/stores/appStore';
import { useAuthStore } from '@/stores/authStore';

const Index = () => {
  const isFirstLaunch = useAppStore((state) => state.isFirstLaunch);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const me = useAuthStore((state) => state.me);
  const clearAuth = useAuthStore((state) => state.clearAuth);

  // 토큰은 있지만 me 데이터가 없는 경우 데이터 가져오기
  const queriesResult = useQueriesMe({
    enabled: isAuthenticated && !me,
    retry: 1,
  });

  // 1. 워크스루 (최초 실행)
  if (isFirstLaunch) {
    return <Redirect href="/walkthrough" />;
  }

  // 2. 로그인
  if (!isAuthenticated) {
    return <Redirect href="/auth" />;
  }

  // 3. me 데이터 로딩 중
  if (!me && queriesResult?.isPending) {
    return (
      <YStack flex={1} justify="center" items="center">
        <Spinner size="large" />
      </YStack>
    );
  }

  // 4. me 데이터 로딩 실패 → 로그아웃
  if (!me && queriesResult?.isError) {
    clearAuth();
    return <Redirect href="/auth" />;
  }

  // 5. 프로필 설정 (로그인 후)
  const isProfileComplete = me?.profileComplete ?? false;
  if (!isProfileComplete) {
    return <Redirect href="/onboarding" />;
  }

  // 6. 메인 앱
  return <Redirect href="/(tabs)" />;
};

export default Index;
