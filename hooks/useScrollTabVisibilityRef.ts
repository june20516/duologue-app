import { useAnimatedRef, useScrollOffset, useAnimatedReaction } from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';

import { useUiStore } from '@/stores/uiStore';

export function useScrollTabVisibilityRef() {
  // 1. ScrollView에 연결할 Ref 생성
  const scrollRef = useAnimatedRef<any>();

  // 2. 해당 Ref의 스크롤 오프셋을 실시간으로 추적 (Reanimated SharedValue)
  const scrollY = useScrollOffset(scrollRef);

  // 3. Zustand 상태 가져오기
  const { handleTabBarScroll } = useUiStore();

  // 4. 스크롤 변화 감지 및 상태 업데이트 (UI Thread -> JS Thread)
  useAnimatedReaction(
    () => {
      'worklet';
      return scrollY.value;
    },
    (currentY, previousY) => {
      'worklet';
      // previousY는 이전 프레임의 값 (null일 수 있음)
      if (previousY === null) return;

      // 바운스 효과 무시 (iOS)
      if (currentY < 0) return;

      scheduleOnRN(handleTabBarScroll, currentY, previousY);
    }
  );

  return scrollRef;
}
