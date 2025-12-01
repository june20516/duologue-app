import { Image } from 'expo-image';
import { Link } from 'expo-router';
import * as Updates from 'expo-updates';
import { StyleSheet, View, Alert } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { Button, Typography } from '@/components/ui';
import { useAppStore } from '@/stores/appStore';
import { useAuthStore } from '@/stores/authStore';
import { useUiStore } from '@/stores/uiStore';

const HomeScreen = () => {
  const resetApp = useAppStore((state) => state.reset);
  const resetAuth = useAuthStore((state) => state.clearAuth);
  const logout = useAuthStore((state) => state.logout);
  const resetUi = useUiStore((state) => state.resetTabBar);

  const handleResetAll = () => {
    Alert.alert('데이터 초기화', '모든 앱 데이터가 삭제됩니다. 계속하시겠습니까?', [
      { text: '취소', style: 'cancel' },
      {
        text: '초기화',
        style: 'destructive',
        onPress: async () => {
          resetApp();
          resetAuth();
          resetUi();
          await Updates.reloadAsync();
        },
      },
    ]);
  };

  const handleLogout = () => {
    Alert.alert('로그아웃', '로그아웃 하시겠습니까?', [
      { text: '취소', style: 'cancel' },
      {
        text: '로그아웃',
        style: 'destructive',
        onPress: async () => {
          await logout();
        },
      },
    ]);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <View style={styles.titleContainer}>
        <Typography type="title">Welcome!</Typography>
        <HelloWave />
      </View>

      <View style={styles.stepContainer}>
        <Typography type="subtitle">계정</Typography>
        <Button onPress={handleLogout} size="lg" variant="outline" priority="secondary">
          로그아웃
        </Button>
      </View>
      <View style={styles.stepContainer}>
        <Typography type="subtitle">개발 도구</Typography>
        <Button onPress={handleResetAll} size="lg">
          모든 앱 데이터 초기화
        </Button>
        <Typography color="$colorSoft" fontSize="$2">
          워크스루, 로그인, 프로필 등 모든 데이터가 삭제됩니다.
        </Typography>
      </View>
      <View style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <Typography type="subtitle">Step 2: Explore</Typography>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <Typography>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </Typography>
      </View>
      <View style={styles.stepContainer}>
        <Typography type="subtitle">Step 3: Get a fresh start</Typography>
        <Typography>
          {`When you're ready, run `}
          <Typography type="semiBold">npm run reset-project</Typography> to get a fresh{' '}
          <Typography type="semiBold">app</Typography> directory. This will move the current{' '}
          <Typography type="semiBold">app</Typography> to{' '}
          <Typography type="semiBold">app-example</Typography>.
        </Typography>
      </View>
    </ParallaxScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
