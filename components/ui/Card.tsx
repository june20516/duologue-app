import {
  CardBackground as TamaguiCardBackground,
  CardFooter as TamaguiCardFooter,
  CardHeader as TamaguiCardHeader,
  Card as TamaguiCard,
  CardProps as TamaguiCardProps,
  CardFooterProps,
} from 'tamagui';

import shadow from '@/styles/shadow';

type CardVariant = 'default' | 'outlined' | 'elevated';

interface CustomCardProps {
  variant?: CardVariant;
  children: React.ReactNode;
}

export type CardProps = Omit<TamaguiCardProps, 'variant'> & CustomCardProps;

const CardRoot: React.FC<CardProps> & {
  Header: typeof TamaguiCardHeader;
  Footer: typeof CardFooter;
  Background: typeof TamaguiCardBackground;
} = ({ variant = 'default', children, onPress, ...rest }) => {
  // Variant 매핑
  const variantProps: Record<CardVariant, TamaguiCardProps> = {
    default: {
      bg: '$background',
      borderWidth: 0,
      ...shadow.sm,
    },
    outlined: {
      bg: '$background',
      borderWidth: 1,
      borderColor: '$colorSoft',
      shadowOpacity: 0,
    },
    elevated: {
      bg: '$background',
      borderWidth: 0,
      ...shadow.lg,
    },
  };

  // onPress가 있을 때만 pressable 스타일 적용
  const pressableProps = onPress
    ? {
        animation: 'quick' as const,
        pressStyle: { scale: 0.8 },
        cursor: 'pointer' as const,
      }
    : {};

  return (
    <TamaguiCard
      {...rest}
      {...variantProps[variant]}
      borderRadius="$2"
      overflow="visible"
      onPress={onPress}
      {...pressableProps}
    >
      {children}
    </TamaguiCard>
  );
};

const CardFooter: React.FC<CardFooterProps> = ({ padded, children, ...rest }) => {
  return (
    <TamaguiCardFooter {...rest} padded={padded ?? true}>
      {children}
    </TamaguiCardFooter>
  );
};

CardRoot.Header = TamaguiCardHeader;
CardRoot.Header.displayName = 'Card.Header';
CardRoot.Footer = CardFooter;
CardRoot.Footer.displayName = 'Card.Footer';
CardRoot.Background = TamaguiCardBackground;
CardRoot.Background.displayName = 'Card.Background';

export const Card = CardRoot;
export default Card;
