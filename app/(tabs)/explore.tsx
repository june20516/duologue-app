import { Image } from 'expo-image';
import { Platform, StyleSheet, View } from 'react-native';

import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { Collapsible } from '@/components/ui/Collapsible';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Typography } from '@/components/ui/Typography';
import { Fonts } from '@/constants/theme';

const ExploreScreen = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<IconSymbol size={310} color="#808080" name="Code" style={styles.headerImage} />}
    >
      <View style={styles.titleContainer}>
        <Typography
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}
        >
          Explore
        </Typography>
      </View>
      <Typography>This app includes example code to help you get started.</Typography>
      <Collapsible title="File-based routing">
        <Typography>
          This app has two screens: <Typography type="semiBold">app/(tabs)/index.tsx</Typography>{' '}
          and <Typography type="semiBold">app/(tabs)/explore.tsx</Typography>
        </Typography>
        <Typography>
          The layout file in <Typography type="semiBold">app/(tabs)/_layout.tsx</Typography> sets up
          the tab navigator.
        </Typography>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <Typography type="link">Learn more</Typography>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <Typography>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <Typography type="semiBold">w</Typography> in the terminal running this project.
        </Typography>
      </Collapsible>
      <Collapsible title="Images">
        <Typography>
          For static images, you can use the <Typography type="semiBold">@2x</Typography> and{' '}
          <Typography type="semiBold">@3x</Typography> suffixes to provide files for different
          screen densities
        </Typography>
        <Image
          source={require('@/assets/images/react-logo.png')}
          style={{ width: 100, height: 100, alignSelf: 'center' }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <Typography type="link">Learn more</Typography>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <Typography>
          This template has light and dark mode support. The{' '}
          <Typography type="semiBold">useColorScheme()</Typography> hook lets you inspect what the
          user&apos;s current color scheme is, and so you can adjust UI colors accordingly.
        </Typography>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <Typography type="link">Learn more</Typography>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <Typography>
          This template includes an example of an animated component. The{' '}
          <Typography type="semiBold">components/HelloWave.tsx</Typography> component uses the
          powerful{' '}
          <Typography type="semiBold" style={{ fontFamily: Fonts.mono }}>
            react-native-reanimated
          </Typography>{' '}
          library to create a waving hand animation.
        </Typography>
        {Platform.select({
          ios: (
            <Typography>
              The <Typography type="semiBold">components/ParallaxScrollView.tsx</Typography>{' '}
              component provides a parallax effect for the header image.
            </Typography>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
