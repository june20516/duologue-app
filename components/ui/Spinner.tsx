import React from 'react';
import { Spinner as TamaguiSpinner, SpinnerProps as TamaguiSpinnerProps, YStack } from 'tamagui';

type SpinnerSize = 'small' | 'medium' | 'large';

interface CustomSpinnerProps {
  size?: SpinnerSize;
  color?: string;
  fullscreen?: boolean;
}

export type SpinnerProps = Omit<TamaguiSpinnerProps, 'size' | 'color'> & CustomSpinnerProps;

const Spinner: React.FC<SpinnerProps> = ({
  size = 'medium',
  color = '$primary',
  fullscreen = false,
  ...rest
}) => {
  // Size 매핑
  const sizeMap: Record<SpinnerSize, TamaguiSpinnerProps['size']> = {
    small: 'small',
    medium: 'large',
    large: 'large',
  };

  // Scale 매핑
  const scaleMap: Record<SpinnerSize, number> = {
    small: 1,
    medium: 1.5,
    large: 2,
  };

  const spinner = (
    <TamaguiSpinner {...rest} size={sizeMap[size]} color={color} scale={scaleMap[size]} />
  );

  if (fullscreen) {
    return (
      <YStack
        position="absolute"
        t={0}
        l={0}
        r={0}
        b={0}
        items="center"
        justify="center"
        bg="$background"
        opacity={0.9}
        z={9999}
      >
        {spinner}
      </YStack>
    );
  }

  return spinner;
};

export default Spinner;
