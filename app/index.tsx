import { Redirect } from 'expo-router';

import { useAppStore } from '@/stores/appStore';
import { useAuthStore } from '@/stores/authStore';
import { useUserStore } from '@/stores/userStore';

const Index = () => {
  const isFirstLaunch = useAppStore((state) => state.isFirstLaunch);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isProfileComplete = useUserStore((state) => state.isProfileComplete);

  // 1. 워크스루 (최초 실행)
  if (isFirstLaunch) {
    return <Redirect href="/walkthrough" />;
  }

  // 2. 로그인
  if (!isAuthenticated) {
    return <Redirect href="/auth" />;
  }

  // 3. 프로필 설정 (로그인 후)
  if (!isProfileComplete) {
    return <Redirect href="/onboarding" />;
  }

  // 4. 메인 앱
  return <Redirect href="/(tabs)" />;
};

export default Index;
