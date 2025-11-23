import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useCallback } from 'react';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useUiStore } from '@/stores/uiStore';

import { TAB_BAR_HEIGHT } from './constants';
import { Container, Content, CircularBackground, IconsContainer } from './styles';
import { TabIcon } from './TabIcon';
import { useAnimatedStyles } from './useAnimatedStyles';
import { useGestures } from './useGestures';
import { getCircularIndex } from './utils';

const AnimatedContainer = Animated.createAnimatedComponent(Container);
const AnimatedCircularBackground = Animated.createAnimatedComponent(CircularBackground);

const DynamicTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const { bottom } = useSafeAreaInsets();
  const isVisible = useUiStore((state) => state.tabBar.isVisible);
  const FULL_HEIGHT = TAB_BAR_HEIGHT + bottom;

  // Get current route and adjacent routes (circular)
  const currentIndex = state.index;
  const totalRoutes = state.routes.length;

  const leftRouteIndex = getCircularIndex(currentIndex - 1, totalRoutes);
  const rightRouteIndex = getCircularIndex(currentIndex + 1, totalRoutes);

  const currentRoute = state.routes[currentIndex];
  const leftRoute = state.routes[leftRouteIndex];
  const rightRoute = state.routes[rightRouteIndex];

  // Navigation handler
  const navigateToRoute = useCallback(
    (routeIndex: number) => {
      const targetRoute = state.routes[routeIndex];
      navigation.navigate(targetRoute.name, targetRoute.params);
    },
    [state.routes, navigation]
  );

  // Gestures
  const { isPressing, dragX, dragY, hoveredIndex, combinedGesture } = useGestures({
    navigateToRoute,
    leftRouteIndex,
    rightRouteIndex,
  });

  // Animated styles
  const { tabBarStyle, backgroundStyle, centerIconStyle, leftIconStyle, rightIconStyle } =
    useAnimatedStyles({
      isPressing,
      dragX,
      dragY,
      hoveredIndex,
      isVisible,
      fullHeight: FULL_HEIGHT,
    });

  return (
    <AnimatedContainer style={[tabBarStyle, { height: FULL_HEIGHT, paddingBottom: bottom }]}>
      <GestureDetector gesture={combinedGesture}>
        <Content height={TAB_BAR_HEIGHT}>
          {/* Circular background */}
          <AnimatedCircularBackground style={backgroundStyle} />

          {/* Icons layer */}
          <IconsContainer>
            {/* Left icon */}
            <TabIcon
              route={leftRoute}
              isFocused={false}
              Icon={descriptors[leftRoute.key].options.tabBarIcon}
              animatedStyle={leftIconStyle}
              hoveredIndex={hoveredIndex}
              tabIndex={0}
            />

            {/* Center icon */}
            <TabIcon
              route={currentRoute}
              isFocused={true}
              Icon={descriptors[currentRoute.key].options.tabBarIcon}
              animatedStyle={centerIconStyle}
              hoveredIndex={hoveredIndex}
              tabIndex={1}
            />

            {/* Right icon */}
            <TabIcon
              route={rightRoute}
              isFocused={false}
              Icon={descriptors[rightRoute.key].options.tabBarIcon}
              animatedStyle={rightIconStyle}
              hoveredIndex={hoveredIndex}
              tabIndex={2}
            />
          </IconsContainer>
        </Content>
      </GestureDetector>
    </AnimatedContainer>
  );
};

export default DynamicTabBar;
