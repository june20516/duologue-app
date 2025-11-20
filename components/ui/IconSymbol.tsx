import { icons, LucideIcon as LucideIconType } from 'lucide-react-native';
import { StyleProp, ViewStyle } from 'react-native';

/**
 * Icon component using lucide-react-native
 */
export const IconSymbol = ({
  name,
  size = 24,
  color,
  style,
}: {
  name: keyof typeof icons;
  size?: number;
  color: string;
  style?: StyleProp<ViewStyle>;
}) => {
  /* eslint-disable import/namespace */
  const LuciedIcon: LucideIconType = icons[name];
  return <LuciedIcon color={color} size={size} style={style} />;
};
