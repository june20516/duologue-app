import { Gesture } from 'react-native-gesture-handler';
import { useSharedValue, withSpring } from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';

import { LONG_PRESS_DURATION, SIDE_ICON_DISTANCE, HOVER_THRESHOLD } from './constants';

interface UseGesturesParams {
  navigateToRoute: (routeIndex: number) => void;
  leftRouteIndex: number;
  rightRouteIndex: number;
}

export const useGestures = ({
  navigateToRoute,
  leftRouteIndex,
  rightRouteIndex,
}: UseGesturesParams) => {
  const isPressing = useSharedValue(false);
  const pressStartTime = useSharedValue(0);
  const dragX = useSharedValue(0);
  const dragY = useSharedValue(0);
  const hoveredIndex = useSharedValue<number>(-1); // -1: none, 0: left, 1: center, 2: right
  const hasDragged = useSharedValue(false); // pan이 시작되었는지 추적

  const updateHoveredIndex = () => {
    'worklet';
    const x = dragX.value;
    const y = dragY.value;

    const distanceFromCenter = Math.sqrt(x * x + y * y);

    if (distanceFromCenter < HOVER_THRESHOLD) {
      hoveredIndex.value = 1; // center
      return;
    }

    const leftIconX = -SIDE_ICON_DISTANCE;
    const distanceFromLeft = Math.sqrt(Math.pow(x - leftIconX, 2) + y * y);

    const rightIconX = SIDE_ICON_DISTANCE;
    const distanceFromRight = Math.sqrt(Math.pow(x - rightIconX, 2) + y * y);

    if (distanceFromLeft < HOVER_THRESHOLD) {
      hoveredIndex.value = 0; // left
    } else if (distanceFromRight < HOVER_THRESHOLD) {
      hoveredIndex.value = 2; // right
    } else {
      hoveredIndex.value = -1; // none
    }
  };

  const longPress = Gesture.LongPress()
    .minDuration(LONG_PRESS_DURATION)
    .onStart(() => {
      'worklet';
      isPressing.value = true;
      hasDragged.value = false;
      hoveredIndex.value = 1; // 중앙 아이콘을 기본 호버 상태로 설정
    })
    .onEnd(() => {
      'worklet';
      // pan이 시작되지 않았을 때만 리셋
      if (!hasDragged.value) {
        isPressing.value = false;
        dragX.value = withSpring(0, { damping: 20, stiffness: 150 });
        dragY.value = withSpring(0, { damping: 20, stiffness: 150 });
        hoveredIndex.value = -1;
      }
    });

  const pan = Gesture.Pan()
    .minDistance(0)
    .onBegin(() => {
      'worklet';
      pressStartTime.value = Date.now();
    })
    .onUpdate((event) => {
      'worklet';
      const elapsed = Date.now() - pressStartTime.value;

      // LongPress가 늦게 발동될 수 있으니 pan에서도 시간 체크
      if (elapsed >= LONG_PRESS_DURATION && !isPressing.value) {
        isPressing.value = true;
      }

      // 활성화된 상태에서만 드래그 허용
      if (isPressing.value) {
        hasDragged.value = true;
        // 드래그 거리를 사이드 아이콘 범위로 제한
        const clampedX = Math.max(-SIDE_ICON_DISTANCE, Math.min(SIDE_ICON_DISTANCE, event.translationX));
        dragX.value = clampedX;
        updateHoveredIndex();
      }
    })
    .onEnd(() => {
      'worklet';
      const wasPressed = isPressing.value;
      const selectedIndex = hoveredIndex.value;

      // 리셋
      isPressing.value = false;
      pressStartTime.value = 0;
      hasDragged.value = false;
      dragX.value = withSpring(0, { damping: 20, stiffness: 150 });
      dragY.value = withSpring(0, { damping: 20, stiffness: 150 });
      hoveredIndex.value = -1;

      // 네비게이션
      if (wasPressed) {
        if (selectedIndex === 0) {
          scheduleOnRN(navigateToRoute, leftRouteIndex);
        } else if (selectedIndex === 2) {
          scheduleOnRN(navigateToRoute, rightRouteIndex);
        }
      }
    });

  const gesture = Gesture.Simultaneous(longPress, pan);

  return {
    isPressing,
    dragX,
    dragY,
    hoveredIndex,
    combinedGesture: gesture,
  };
};
