import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Text, XStack, YStack } from 'tamagui';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { Typography } from '@/components/Typography';
import { Button } from '@/components/ui';

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);

  const handleLoadingTest = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
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

      <YStack paddingBlock="$4" gap="$4">
        <Text fontSize="$6" fontWeight="bold" color="$color">
          Button Component Test
        </Text>

        <YStack gap="$3">
          <Text fontSize="$4" fontWeight="600">
            Variants
          </Text>
          <XStack gap="$2" flexWrap="wrap">
            <Button variant="primary" onPress={() => alert('Primary')}>
              Primary
            </Button>
            <Button variant="secondary" onPress={() => alert('Secondary')}>
              Secondary
            </Button>
            <Button variant="outline" onPress={() => alert('Outline')}>
              Outline
            </Button>
            <Button variant="ghost" onPress={() => alert('Ghost')}>
              Ghost
            </Button>
          </XStack>
        </YStack>

        <YStack gap="$3">
          <Text fontSize="$4" fontWeight="600">
            Sizes
          </Text>
          <XStack gap="$2" items="center" flex={1} flexWrap="wrap">
            <Button size="sm" variant="primary" onPress={() => alert('Small')}>
              Small
            </Button>
            <Button size="md" variant="primary" onPress={() => alert('Medium')}>
              Medium
            </Button>
            <Button size="lg" variant="primary" onPress={() => alert('Large')}>
              Large
            </Button>
          </XStack>
        </YStack>

        <YStack gap="$3">
          <Text fontSize="$4" fontWeight="600">
            States
          </Text>
          <XStack gap="$2" flexWrap="wrap">
            <Button variant="primary" disabled>
              Disabled
            </Button>
            <Button variant="primary" loading={loading} onPress={handleLoadingTest}>
              {loading ? 'Loading...' : 'Click to Load'}
            </Button>
          </XStack>
        </YStack>
      </YStack>
      <View style={styles.stepContainer}>
        <Typography type="subtitle">Step 1: Try it</Typography>
        <Typography>
          Edit <Typography type="defaultSemiBold">app/(tabs)/index.tsx</Typography> to see changes.
          Press{' '}
          <Typography type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </Typography>{' '}
          to open developer tools.
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
          <Typography type="defaultSemiBold">npm run reset-project</Typography> to get a fresh{' '}
          <Typography type="defaultSemiBold">app</Typography> directory. This will move the current{' '}
          <Typography type="defaultSemiBold">app</Typography> to{' '}
          <Typography type="defaultSemiBold">app-example</Typography>.
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
