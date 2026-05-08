import { ViewStyle } from 'react-native';
import { useTheme } from 'tamagui';

export const fullscreen: ViewStyle = {
  flex: 1,
};

export const useCommonStyle = () => {
  const theme = useTheme();
  const backgroundColor = theme.background.val;
  return {
    fullscreen: {
      ...fullscreen,
    },
    defaultBackground: {
      backgroundColor,
    },
  };
};
