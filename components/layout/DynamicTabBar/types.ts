import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import type { SharedValue } from 'react-native-reanimated';

export type Route = BottomTabBarProps['state']['routes'][number];

export interface TabIconProps {
  route: Route;
  isFocused: boolean;
  Icon?: React.ComponentType<{ focused: boolean; color: string; size: number }>;
  animatedStyle: any;
  hoveredIndex: SharedValue<number>;
  tabIndex: number;
  pointerEvents?: 'auto' | 'none' | 'box-none' | 'box-only';
}
