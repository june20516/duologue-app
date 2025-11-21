import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useCallback, useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useUiStore } from '@/stores/uiStore';
type Route = BottomTabBarProps['state']['routes'][number];

const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const { bottom } = useSafeAreaInsets(); // 하단 안전 영역(노치 등) 높이
  const isVisible = useUiStore((state) => state.tabBar.isVisible);

  // 탭바의 기본 높이 (스타일과 맞춰야 함) + 안전 영역
  const TAB_BAR_HEIGHT = 60;
  const FULL_HEIGHT = TAB_BAR_HEIGHT + bottom;

  // 애니메이션 스타일 정의
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          // 보이면 0, 숨기면 전체 높이만큼 아래로 이동
          translateY: withTiming(isVisible ? 0 : FULL_HEIGHT, {
            duration: 300,
          }),
        },
      ],
    };
  });

  const [visibleRoutes, setVisibleRoutes] = useState<Route[]>([]);

  const updateVisibleRoutes = useCallback(
    (route: Route) => {
      const selectedRoutesIndex = state.routes.findIndex((r) => route.key === r.key);
      const prevIndex =
        selectedRoutesIndex - 1 < 0 ? state.routes.length - 1 : selectedRoutesIndex - 1;
      const nextIndex =
        selectedRoutesIndex + 1 > state.routes.length - 1 ? 0 : selectedRoutesIndex + 1;
      setVisibleRoutes([
        state.routes[prevIndex],
        state.routes[selectedRoutesIndex],
        state.routes[nextIndex],
      ]);
    },
    [state.routes]
  );

  const isFocused = (route: Route) =>
    state.index === state.routes.findIndex((r) => route.key === r.key);

  const onSelect = (route: Route) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    updateVisibleRoutes(route);

    const focused = isFocused(route);
    if (!focused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params);
    }
  };

  useEffect(() => {
    updateVisibleRoutes(state.routes[state.index]);
  }, [state, updateVisibleRoutes]);

  return (
    <Animated.View
      style={[styles.container, animatedStyle, { height: FULL_HEIGHT, paddingBottom: bottom }]}
    >
      <View style={styles.content}>
        {visibleRoutes.map((route) => {
          // 1. 탭 설정 가져오기
          const { options } = descriptors[route.key];

          const focused = isFocused(route);

          // 3. 아이콘 렌더링 (설정된 컴포넌트 사용)
          const Icon = options.tabBarIcon;

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={focused ? { selected: true } : {}}
              onPress={() => onSelect(route)}
              style={styles.tabButton}
            >
              {/* _layout.tsx에서 설정한 아이콘을 여기서 그림 */}
              {Icon && <Icon focused={focused} color={focused ? '#007AFF' : '#8E8E93'} size={24} />}
            </TouchableOpacity>
          );
        })}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute', // 둥둥 떠있어야 함
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    elevation: 8, // 안드로이드 그림자
    shadowColor: '#000', // iOS 그림자
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  content: {
    flexDirection: 'row',
    height: 60, // TAB_BAR_HEIGHT와 일치
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

export default TabBar;
