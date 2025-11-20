import React from 'react';
import { Button as TamaguiButton, ButtonProps as TamaguiButtonProps, Spinner, Text } from 'tamagui';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface CustomButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: React.ReactNode;
}

export type ButtonProps = Omit<TamaguiButtonProps, 'size' | 'variant'> & CustomButtonProps;

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
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

  // Variant 매핑
  const variantProps: Record<ButtonVariant, TamaguiButtonProps> = {
    primary: {
      bg: '$primary',
      color: '$color',
      borderWidth: 0,
      hoverStyle: {
        bg: '$primaryHover',
      },
      pressStyle: {
        bg: '$primaryPress',
      },
    },
    secondary: {
      bg: '$secondary',
      color: '$colorSurface',
      borderWidth: 0,
      hoverStyle: {
        bg: '$secondaryHover',
      },
      pressStyle: {
        bg: '$secondaryPress',
      },
    },
    outline: {
      bg: 'transparent',
      color: '$color',
      borderWidth: 1,
      borderColor: '$color',
      hoverStyle: {
        bg: '$primarySurfaceHover',
      },
      pressStyle: {
        bg: '$primarySurfacePress',
      },
    },
    ghost: {
      bg: 'transparent',
      color: '$color',
      borderWidth: 0,
      hoverStyle: {
        bg: '$primarySurfaceHover',
      },
      pressStyle: {
        bg: '$primarySurfacePress',
      },
    },
  };

  const isDisabled = disabled || loading;

  return (
    <TamaguiButton
      {...rest}
      {...sizeProps[size]}
      {...variantProps[variant]}
      disabled={isDisabled}
      opacity={isDisabled ? 0.5 : 1}
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
      onPress={isDisabled ? undefined : onPress}
      role="button"
      aria-disabled={isDisabled}
      icon={loading ? <Spinner size="small" color="currentColor" /> : undefined}
    >
      {!loading &&
        (typeof children === 'string' ? (
          <Text color={variantProps[variant].color}>{children}</Text>
        ) : (
          children
        ))}
    </TamaguiButton>
  );
};

export default Button;
