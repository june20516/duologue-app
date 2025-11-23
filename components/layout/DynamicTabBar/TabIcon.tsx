import { useState } from 'react';
import Animated, { useAnimatedReaction } from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';
import { useTheme } from 'tamagui';

import { IconContainer } from './styles';
import { TabIconProps } from './types';

const AnimatedIconContainer = Animated.createAnimatedComponent(IconContainer);

export const TabIcon: React.FC<TabIconProps> = ({
  isFocused,
  Icon,
  animatedStyle,
  hoveredIndex,
  tabIndex,
}) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  // hoveredIndex가 변경될 때마다 React state 업데이트
  useAnimatedReaction(
    () => hoveredIndex.value === tabIndex,
    (current) => {
      scheduleOnRN(setIsHovered, current);
    }
  );

  const color = isHovered ? theme.colorSurface.val : theme.color.val;

  return (
    <AnimatedIconContainer style={animatedStyle}>
      {Icon && <Icon focused={isFocused} color={color} size={24} />}
    </AnimatedIconContainer>
  );
};
