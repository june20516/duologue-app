import { useState } from 'react';
import { Button as TamaguiButton, ButtonProps as TamaguiButtonProps, Spinner } from 'tamagui';

import Typography from './Typography';

type ButtonVariant = 'filled' | 'outline' | 'ghost';
type ButtonPriority = 'primary' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg';

interface CustomButtonProps {
  variant?: ButtonVariant;
  priority?: ButtonPriority;
  size?: ButtonSize;
  loading?: boolean;
  children: React.ReactNode;
}

export type ButtonProps = Omit<TamaguiButtonProps, 'size' | 'variant'> & CustomButtonProps;

const Button: React.FC<ButtonProps> = ({
  variant = 'filled',
  priority = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  children,
  onPress,
  ...rest
}) => {
  // Size 매핑
  const sizeProps: Record<ButtonSize, TamaguiButtonProps> = {
    sm: {
      px: '$3',
      py: '$2',
      fontSize: '$3',
      height: 36,
    },
    md: {
      px: '$4',
      py: '$3',
      fontSize: '$4',
      height: 44,
    },
    lg: {
      px: '$5',
      py: '$4',
      fontSize: '$5',
      height: 52,
    },
  };

  const getStyleProps = (variant: ButtonVariant, priority: ButtonPriority): TamaguiButtonProps => {
    const mainColor = priority === 'primary' ? '$primary' : '$secondary';
    const textColor = priority === 'primary' ? '$color' : '$colorSurface';
    switch (variant) {
      case 'filled': {
        const hoverColor = priority === 'primary' ? '$primaryHover' : '$secondaryHover';
        const pressColor = priority === 'primary' ? '$primaryPress' : '$secondaryPress';
        return {
          bg: mainColor,
          color: textColor,
          borderWidth: 0,
          hoverStyle: {
            bg: hoverColor,
          },
          pressStyle: {
            bg: pressColor,
          },
        };
      }
      case 'outline': {
        const hoverColor =
          priority === 'primary' ? '$primarySurfaceHover' : '$secondarySurfaceHover';
        const pressColor =
          priority === 'primary' ? '$primarySurfacePress' : '$secondarySurfacePress';
        return {
          bg: 'transparent',
          color: '$color',
          borderWidth: 1,
          borderColor: '$color',
          hoverStyle: {
            bg: hoverColor,
          },
          pressStyle: {
            bg: pressColor,
          },
        };
      }
      case 'ghost': {
        const hoverColor =
          priority === 'primary' ? '$primarySurfaceHover' : '$secondarySurfaceHover';
        const pressColor =
          priority === 'primary' ? '$primarySurfacePress' : '$secondarySurfacePress';
        return {
          bg: 'transparent',
          color: '$color',
          borderWidth: 0,
          hoverStyle: {
            bg: hoverColor,
          },
          pressStyle: {
            bg: pressColor,
          },
        };
      }
    }
  };

  const isDisabled = disabled || loading;

  const styleProps = getStyleProps(variant, priority);

  const [fixedWidth, setFixedWidth] = useState(rest.width);

  return (
    <TamaguiButton
      {...rest}
      {...sizeProps[size]}
      {...styleProps}
      disabled={isDisabled}
      opacity={isDisabled ? 0.5 : 1}
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
      onPress={isDisabled ? undefined : onPress}
      role="button"
      aria-disabled={isDisabled}
      icon={loading ? <Spinner size="small" color="currentColor" /> : undefined}
      onLayout={(event) => {
        if (typeof fixedWidth !== 'undefined') return;

        setFixedWidth(event.nativeEvent.layout.width);
      }}
      width={rest.width ?? fixedWidth}
    >
      {!loading &&
        (typeof children === 'string' ? (
          <Typography color={styleProps.color}>{children}</Typography>
        ) : (
          children
        ))}
    </TamaguiButton>
  );
};

export default Button;
