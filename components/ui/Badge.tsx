import { Circle, CircleProps, GetThemeValueForKey } from 'tamagui';

import Typography from './Typography';

type BadgeVariant = 'primary' | 'secondary';

interface BadgeProps {
  count: number;
  color?: BadgeVariant;
}

const variants: Record<BadgeVariant, CircleProps & { color: GetThemeValueForKey<'color'> }> = {
  primary: {
    bg: '$primary',
    color: '$colorOnPrimary',
  },
  secondary: {
    bg: '$secondary',
    color: '$colorOnSecondary',
  },
};

const Badge: React.FC<BadgeProps> = ({ count, color = 'secondary' }) => {
  const variantStyle = variants[color];
  return (
    <Circle size={20} bg="$colorSurface" items="center" justify="center" {...variantStyle}>
      <Typography type="caption" color={variantStyle.color}>
        {count}
      </Typography>
    </Circle>
  );
};

export default Badge;
