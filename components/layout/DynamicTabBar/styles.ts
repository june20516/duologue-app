import { View } from 'react-native';
import { styled } from 'tamagui';

export const Container = styled(View, {
  name: 'TabBarContainer',
  position: 'absolute',
  b: 0,
  l: 0,
  r: 0,
});

export const Content = styled(View, {
  name: 'TabBarContent',
  justify: 'center',
  items: 'center',
});

export const CircularBackground = styled(View, {
  name: 'CircularBackground',
  position: 'absolute',
  width: 40,
  height: 40,
  rounded: 40,
  bg: '$secondary',
});

export const IconsContainer = styled(View, {
  name: 'IconsContainer',
  width: '100%',
  height: '100%',
  justify: 'center',
  items: 'center',
});

export const IconContainer = styled(View, {
  name: 'IconContainer',
  position: 'absolute',
  justify: 'center',
  items: 'center',
  rounded: 40,
  width: 50,
  height: 50,
  bg: '$primary',
});
