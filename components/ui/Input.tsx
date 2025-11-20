import React, { useState } from 'react';
import {
  Input as TamaguiInput,
  InputProps as TamaguiInputProps,
  Text,
  XStack,
  YStack,
} from 'tamagui';

type InputVariant = 'default' | 'error';

interface CustomInputProps {
  label?: string;
  helperText?: string;
  errorText?: string;
  variant?: InputVariant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export type InputProps = TamaguiInputProps & CustomInputProps;

const Input: React.FC<InputProps> = ({
  label,
  helperText,
  errorText,
  variant = 'default',
  leftIcon,
  rightIcon,
  disabled = false,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const isError = variant === 'error' || !!errorText;
  const displayText = errorText || helperText;

  // Border color 결정 (Tamagui 토큰 사용)
  const getBorderColor = () => {
    if (disabled) return '$gray200';
    if (isError) return '$error';
    if (isFocused) return '$lime';
    return '$gray300';
  };

  // Background color 결정 (Tamagui 토큰 사용)
  const getBackgroundColor = () => {
    if (disabled) return '$gray100';
    return '$white';
  };

  return (
    <YStack gap="$2" width="100%">
      {/* Label */}
      {label && (
        <Text fontSize="$3" fontWeight="600" color={isError ? '$error' : '$offBlack'}>
          {label}
        </Text>
      )}

      {/* Input Container */}
      <XStack
        items="center"
        gap="$2"
        px="$3"
        bg={getBackgroundColor()}
        borderWidth={2}
        borderColor={getBorderColor()}
        rounded="$5"
        borderStyle="dashed"
        opacity={disabled ? 0.5 : 1}
      >
        {/* Left Icon */}
        {leftIcon && <XStack>{leftIcon}</XStack>}

        {/* Input */}
        <TamaguiInput
          {...rest}
          flex={1}
          borderWidth={0}
          bg="transparent"
          px="$0"
          height={44}
          fontSize="$4"
          color="$offBlack"
          placeholderTextColor="$gray400"
          disabled={disabled}
          onFocus={(e) => {
            setIsFocused(true);
            rest.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            rest.onBlur?.(e);
          }}
          accessibilityLabel={label}
          accessibilityState={{
            disabled,
          }}
        />

        {/* Right Icon */}
        {rightIcon && <XStack>{rightIcon}</XStack>}
      </XStack>

      {/* Helper or Error Text */}
      {displayText && (
        <Text fontSize="$2" color={isError ? '$error' : '$gray600'}>
          {displayText}
        </Text>
      )}
    </YStack>
  );
};

export default Input;
