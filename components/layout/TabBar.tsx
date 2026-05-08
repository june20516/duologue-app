import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useCallback, useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
  withSpring,
  Easing,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { scheduleOnRN } from 'react-native-worklets';

import { useUiStore } from '@/stores/uiStore';

type Route = BottomTabBarProps['state']['routes'][number];

const SCREEN_WIDTH = Dimensions.get('window').width;
const VISIBLE_TAB_COUNT = 3;
const PADDING_TAB_COUNT = 2;
const CENTER_TAB_INDEX = Math.floor((VISIBLE_TAB_COUNT + PADDING_TAB_COUNT) / 2);
const TAB_WIDTH = SCREEN_WIDTH / VISIBLE_TAB_COUNT;

interface TabItemProps {
  route: Route;
  index: number;
  isFocused: boolean;
  onPress: () => void;
  Icon?: React.ComponentType<{ focused: boolean; color: string; size: number }>;
}

const TabItem: React.FC<TabItemProps> = ({ index, isFocused, onPress, Icon }) => {
  const tabItemStyle = useAnimatedStyle(() => {
    const isCenterTab = index === CENTER_TAB_INDEX;
    return {
      opacity: withTiming(isCenterTab ? 1 : 0.6, { duration: 200 }),
      transform: [
        {
          scale: withSpring(isCenterTab ? 1 : 0.85, {
            damping: 15,
            stiffness: 100,
          }),
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.tabButton, tabItemStyle]}>
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        onPress={onPress}
        style={styles.tabTouchable}
      >
        {Icon && <Icon focused={isFocused} color={isFocused ? '#007AFF' : '#8E8E93'} size={24} />}
      </TouchableOpacity>
    </Animated.View>
  );
};

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
  const animationOffset = useSharedValue(0);

  const applyRouteUpdate = useCallback(
    (prevIndex: number, selectedIndex: number, nextIndex: number) => {
      animationOffset.value = 0;
      setVisibleRoutes([
        state.routes[nextIndex],
        state.routes[prevIndex],
        state.routes[selectedIndex],
        state.routes[nextIndex],
        state.routes[prevIndex],
      ]);
    },
    [animationOffset, state.routes]
  );

  const updateVisibleRoutes = useCallback(
    (route: Route, direction?: 'left' | 'right') => {
      const totalRoutes = state.routes.length;
      const selectedRoutesIndex = state.routes.findIndex((r) => route.key === r.key);

      const getCircularIndex = (index: number) => {
        return ((index % totalRoutes) + totalRoutes) % totalRoutes;
      };

      const prevIndex = getCircularIndex(selectedRoutesIndex - 1);
      const nextIndex = getCircularIndex(selectedRoutesIndex + 1);

      if (direction) {
        const offset = direction === 'left' ? TAB_WIDTH : -TAB_WIDTH;

        animationOffset.value = withTiming(
          offset,
          {
            duration: 300,
            easing: Easing.out(Easing.ease),
          },
          (finished) => {
            'worklet';
            if (finished) scheduleOnRN(applyRouteUpdate, prevIndex, selectedRoutesIndex, nextIndex);
          }
        );
      } else {
        applyRouteUpdate(prevIndex, selectedRoutesIndex, nextIndex);
      }
    },
    [state.routes, animationOffset, applyRouteUpdate]
  );

  const isFocused = (route: Route) =>
    state.index === state.routes.findIndex((r) => route.key === r.key);

  const onSelect = (route: Route, index: number) => {
    if (index === CENTER_TAB_INDEX) return;

    console.log(index, CENTER_TAB_INDEX);
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    const direction = index < CENTER_TAB_INDEX ? 'left' : 'right';
    updateVisibleRoutes(route, direction);

    const focused = isFocused(route);
    if (!focused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params);
    }
  };

  useEffect(() => {
    updateVisibleRoutes(state.routes[state.index]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const carouselStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animationOffset.value }],
    };
  });

  return (
    <Animated.View
      style={[styles.container, animatedStyle, { height: FULL_HEIGHT, paddingBottom: bottom }]}
    >
      <View style={styles.content}>
        <Animated.View style={[styles.carouselContainer, carouselStyle]}>
          {visibleRoutes.map((route, index) => {
            const { options } = descriptors[route.key];
            const focused = isFocused(route);
            const Icon = options.tabBarIcon;

            return (
              <TabItem
                key={route.key + index}
                route={route}
                index={index}
                isFocused={focused}
                onPress={() => onSelect(route, index)}
                Icon={Icon}
              />
            );
          })}
        </Animated.View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  content: {
    height: 60,
    overflow: 'hidden',
  },
  carouselContainer: {
    flexDirection: 'row',
    width: SCREEN_WIDTH,
    justifyContent: 'center',
  },
  tabButton: {
    width: TAB_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  tabTouchable: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabBar;
