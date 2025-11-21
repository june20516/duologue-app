import { Tabs } from 'expo-router';

import TabBar from '@/components/layout/TabBar';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

const TabLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
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
