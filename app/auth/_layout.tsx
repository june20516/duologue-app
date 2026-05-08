import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useCommonStyle } from '@/styles/common';

const AuthLayout = () => {
  const { fullscreen, defaultBackground } = useCommonStyle();

  return (
    <SafeAreaView style={[fullscreen, defaultBackground]}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: [defaultBackground],
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="signin" />
        <Stack.Screen name="signup" />
      </Stack>
    </SafeAreaView>
  );
};

export default AuthLayout;
