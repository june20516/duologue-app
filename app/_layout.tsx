import { useReactQueryDevTools } from '@dev-plugins/react-query';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TamaguiProvider } from 'tamagui';

import { GlobalErrorModal } from '@/components/GlobalErrorModal';
import { ToastProvider } from '@/components/ui';
import { useColorScheme } from '@/hooks/useColorScheme';
import { queryClient } from '@/lib/queryClient';
import { fullscreen } from '@/styles/common';

import config from '../tamagui.config';

import '@/i18n/config';

SplashScreen.preventAutoHideAsync();

// 인증 가드를 위해 anchor를 index로 변경
export const unstable_settings = {
  initialRouteName: 'index',
};

const RootLayout = () => {
  const colorScheme = useColorScheme();
  useReactQueryDevTools(queryClient);

  const [fontsLoaded] = useFonts({
    Pretendard: require('../assets/fonts/Pretendard-Regular.otf'),
    'Pretendard-SemiBold': require('../assets/fonts/Pretendard-SemiBold.otf'),
    'Pretendard-Bold': require('../assets/fonts/Pretendard-Bold.otf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={[fullscreen]}>
        <TamaguiProvider config={config} defaultTheme={colorScheme!}>
          <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <ToastProvider>
              <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="walkthrough" options={{ headerShown: false }} />
                <Stack.Screen name="onboarding" options={{ headerShown: false }} />
                <Stack.Screen name="auth" options={{ headerShown: false }} />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="profile" options={{ headerShown: false }} />
              </Stack>
              <GlobalErrorModal />
              <StatusBar style="auto" />
            </ToastProvider>
          </ThemeProvider>
        </TamaguiProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};

export default RootLayout;
