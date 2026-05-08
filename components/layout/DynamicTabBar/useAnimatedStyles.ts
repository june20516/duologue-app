import { useAnimatedStyle, withTiming, withSpring } from 'react-native-reanimated';
import type { SharedValue } from 'react-native-reanimated';
import { useTheme } from 'tamagui';

import { SIDE_ICON_DISTANCE } from './constants';

interface UseAnimatedStylesParams {
  isPressing: SharedValue<boolean>;
  dragX: SharedValue<number>;
  dragY: SharedValue<number>;
  hoveredIndex: SharedValue<number>;
  isVisible: boolean;
  fullHeight: number;
}

export const useAnimatedStyles = ({
  isPressing,
  dragX,
  dragY,
  hoveredIndex,
  isVisible,
  fullHeight,
}: UseAnimatedStylesParams) => {
  const theme = useTheme();
  const tabBarStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withTiming(isVisible ? 0 : fullHeight, {
            duration: 300,
          }),
        },
      ],
    };
  });

  const backgroundStyle = useAnimatedStyle(() => {
    // 호버된 아이콘의 위치 계산
    let targetX = 0;
    let targetScale = 1; // 기본 scale

    if (hoveredIndex.value === 0) {
      targetX = -SIDE_ICON_DISTANCE; // left icon
      targetScale = 1.2; // leftIconStyle의 scale과 동일
    } else if (hoveredIndex.value === 2) {
      targetX = SIDE_ICON_DISTANCE; // right icon
      targetScale = 1.2; // rightIconStyle의 scale과 동일
    }
    // center icon (1)은 0, scale 1

    // dragX와 targetX 사이의 보간 (sticky effect)
    const stickyFactor = 0.5; // 0~1, 높을수록 아이콘에 더 가까이 붙음
    const interpolatedX = dragX.value + (targetX - dragX.value) * stickyFactor;
    // 클램핑 적용 (아이콘 범위 내로 제한)
    const clampedX = Math.max(-SIDE_ICON_DISTANCE, Math.min(SIDE_ICON_DISTANCE, interpolatedX));
    const interpolatedScale = 1 + (targetScale - 1) * stickyFactor;

    return {
      opacity: withTiming(isPressing.value ? 1 : 0, { duration: 150 }),
      transform: [
        {
          translateX: withSpring(clampedX, {
            damping: 50,
            stiffness: 200,
          }),
        },
        {
          translateY: dragY.value,
        },
        {
          scale: withSpring(isPressing.value ? interpolatedScale : 0, {
            damping: 40,
            stiffness: 250,
          }),
        },
      ],
    };
  });

  const centerIconStyle = useAnimatedStyle(() => {
    const isHovered = hoveredIndex.value === 1;
    return {
      opacity: 1,
      backgroundColor: withTiming(isHovered ? theme.secondary.val : theme.primary.val, {
        duration: 150,
      }),
      transform: [
        {
          scale: withSpring(1, {
            damping: 40,
            stiffness: 250,
          }),
        },
      ],
    };
  });

  const leftIconStyle = useAnimatedStyle(() => {
    const isHovered = hoveredIndex.value === 0;
    return {
      opacity: withTiming(isPressing.value ? 1 : 0, { duration: 150 }),
      backgroundColor: withTiming(isHovered ? theme.secondary.val : theme.primary.val, {
        duration: 150,
      }),
      transform: [
        {
          translateX: -SIDE_ICON_DISTANCE,
        },
        {
          scale: withSpring(isHovered ? 1.2 : 1, {
            damping: 40,
            stiffness: 250,
          }),
        },
      ],
    };
  });

  const rightIconStyle = useAnimatedStyle(() => {
    const isHovered = hoveredIndex.value === 2;
    return {
      opacity: withTiming(isPressing.value ? 1 : 0, { duration: 150 }),
      backgroundColor: withTiming(isHovered ? theme.secondary.val : theme.primary.val, {
        duration: 150,
      }),
      transform: [
        {
          translateX: SIDE_ICON_DISTANCE,
        },
        {
          scale: withSpring(isHovered ? 1.2 : 1, {
            damping: 40,
            stiffness: 150,
          }),
        },
      ],
    };
  });

  return {
    tabBarStyle,
    backgroundStyle,
    centerIconStyle,
    leftIconStyle,
    rightIconStyle,
  };
};
