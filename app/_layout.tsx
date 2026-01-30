import { useReactQueryDevTools } from '@dev-plugins/react-query';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
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

// 인증 가드를 위해 anchor를 index로 변경
export const unstable_settings = {
  initialRouteName: 'index',
};

const RootLayout = () => {
  const colorScheme = useColorScheme();
  useReactQueryDevTools(queryClient);

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
