import { useState } from 'react';
import { Button as TamaguiButton, ButtonProps as TamaguiButtonProps, Spinner } from 'tamagui';

type ButtonVariant = 'filled' | 'outline' | 'ghost';
type ButtonPriority = 'primary' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  priority?: ButtonPriority;
  size?: ButtonSize;
  loading?: boolean;
  children: React.ReactNode;
}

type ReadonlyButtonProps = BaseButtonProps & {
  readonly: true;
  disabled?: never;
  onPress?: never;
};

type InteractiveButtonProps = BaseButtonProps & {
  readonly?: false;
  disabled?: boolean;
  onPress?: TamaguiButtonProps['onPress'];
};

export type ButtonProps = Omit<TamaguiButtonProps, 'size' | 'variant' | 'disabled' | 'onPress'> &
  (ReadonlyButtonProps | InteractiveButtonProps);

const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = 'filled',
    priority = 'primary',
    size = 'md',
    loading = false,
    children,
    ...rest
  } = props;

  const readonly = 'readonly' in props && props.readonly === true;
  const disabled = 'disabled' in props ? (props.disabled ?? false) : false;
  const onPress = 'onPress' in props ? props.onPress : undefined;

  // Size 매핑
  const sizeProps: Record<ButtonSize, TamaguiButtonProps> = {
    sm: {
      size: '$3',
      px: '$3',
      fontSize: '$3',
    },
    md: {
      size: '$4',
      fontSize: '$4',
    },
    lg: {
      size: '$5',
      fontSize: '$5',
    },
  };

  const getStyleProps = (
    variant: ButtonVariant,
    priority: ButtonPriority,
    isReadonly: boolean
  ): TamaguiButtonProps => {
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
          hoverStyle: isReadonly ? {} : { bg: hoverColor },
          pressStyle: isReadonly ? {} : { bg: pressColor },
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
          hoverStyle: isReadonly ? {} : { bg: hoverColor },
          pressStyle: isReadonly ? {} : { bg: pressColor },
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
          hoverStyle: isReadonly ? {} : { bg: hoverColor },
          pressStyle: isReadonly ? {} : { bg: pressColor },
        };
      }
    }
  };

  const isDisabled = disabled || loading;

  const styleProps = getStyleProps(variant, priority, readonly);

  const [measuredMinWidth, setMeasuredMinWidth] = useState<number | undefined>(undefined);

  return (
    <TamaguiButton
      {...rest}
      {...sizeProps[size]}
      {...styleProps}
      disabled={readonly ? false : isDisabled}
      opacity={isDisabled ? 0.5 : 1}
      cursor={readonly ? 'default' : isDisabled ? 'not-allowed' : 'pointer'}
      onPress={readonly ? undefined : isDisabled ? undefined : onPress}
      role="button"
      aria-disabled={readonly ? true : isDisabled}
      aria-readonly={readonly}
      icon={loading ? <Spinner size="small" color="currentColor" /> : undefined}
      onLayout={(event) => {
        if (typeof measuredMinWidth !== 'undefined') return;

        setMeasuredMinWidth(event.nativeEvent.layout.width);
      }}
      style={[{ minWidth: measuredMinWidth }, rest.style]}
    >
      {!loading && children}
    </TamaguiButton>
  );
};

export default Button;
