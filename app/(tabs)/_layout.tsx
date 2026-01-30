import { Tabs } from 'expo-router';

import DynamicTabBar from '@/components/layout/DynamicTabBar';
import { HeaderTickets } from '@/components/layout/header/HeaderTickets';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/useColorScheme';

const TabLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      tabBar={(props) => <DynamicTabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        headerTitle: '',
        headerTransparent: true,
        headerStyle: {
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          borderWidth: 0,
        },
        headerRight: () => <HeaderTickets />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <IconSymbol size={size} name="House" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, size }) => <IconSymbol size={size} name="Send" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <IconSymbol size={size} name="User" color={color} />,
        }}
      />
      <Tabs.Screen
        name="ui"
        options={{
          title: 'UI',
          tabBarIcon: ({ color, size }) => <IconSymbol size={size} name="Brush" color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
