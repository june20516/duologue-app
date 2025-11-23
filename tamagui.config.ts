/**
 * Tamagui Configuration
 *
 * Duologue 디자인 시스템을 Tamagui 토큰으로 정의
 */
import { defaultConfig } from '@tamagui/config/v4';
import { createTamagui } from 'tamagui';

import { injectTokens, tokens } from './styles/tokens';

// ========================================
// Themes
// ========================================

const lightTheme = {
  // 배경/텍스트 (Light Mode)
  background: tokens.color.offWhite,
  backgroundSoft: tokens.color.gray200,
  color: tokens.color.offBlack,
  colorSoft: tokens.color.gray800,
  colorSurface: tokens.color.offWhite,

  shadowColor: tokens.color.gray200,

  primary: tokens.color.lime,
  primaryHover: tokens.color.lime400,
  primaryPress: tokens.color.lime600,
  primarySurface: tokens.color.lime50,
  primarySurfaceHover: tokens.color.lime200,
  primarySurfacePress: tokens.color.lime300,

  secondary: tokens.color.purple,
  secondaryHover: tokens.color.purple400,
  secondaryPress: tokens.color.purple600,
  secondarySurface: tokens.color.purple50,
  secondarySurfaceHover: tokens.color.purple100,
  secondarySurfacePress: tokens.color.purple200,

  // Border/Divider
  borderColor: tokens.color.gray300,
  borderColorHover: tokens.color.lime,
  borderColorFocus: tokens.color.lime,

  // Input/Card 배경
  inputBackground: tokens.color.white,
  inputBackgroundDisabled: tokens.color.gray100,

  // Placeholder
  placeholderColor: tokens.color.gray400,

  // Semantic (테마 무관)
  success: tokens.color.success,
  successLight: tokens.color.successLight,
  error: tokens.color.error,
  errorLight: tokens.color.errorLight,
  warning: tokens.color.warning,
  info: tokens.color.info,
};

const darkTheme = {
  // 배경/텍스트 (Dark Mode)
  background: tokens.color.offBlack,
  backgroundSoft: tokens.color.gray800,
  color: tokens.color.offWhite,
  colorSoft: tokens.color.gray200,
  colorSurface: tokens.color.offBlack,

  shadowColor: tokens.color.gray800,

  primary: tokens.color.purple,
  primaryHover: tokens.color.purple600,
  primaryPress: tokens.color.purple700,
  primarySurface: tokens.color.purple50,
  primarySurfaceHover: tokens.color.purple100,
  primarySurfacePress: tokens.color.purple200,

  secondary: tokens.color.lime,
  secondaryHover: tokens.color.lime600,
  secondaryPress: tokens.color.lime700,
  secondarySurface: tokens.color.lime50,
  secondarySurfaceHover: tokens.color.lime100,
  secondarySurfacePress: tokens.color.lime200,

  // Border/Divider
  borderColor: tokens.color.gray700,
  borderColorHover: tokens.color.lime,
  borderColorFocus: tokens.color.lime,

  // Input/Card 배경
  inputBackground: tokens.color.gray800,
  inputBackgroundDisabled: tokens.color.gray900,

  // Placeholder
  placeholderColor: tokens.color.gray500,

  // Semantic (테마 무관)
  success: tokens.color.success,
  successLight: tokens.color.successLight,
  error: tokens.color.error,
  errorLight: tokens.color.errorLight,
  warning: tokens.color.warning,
  info: tokens.color.info,
};

// ========================================
// Configuration
// ========================================

const config = createTamagui({
  ...defaultConfig,
  tokens: injectTokens(defaultConfig),
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  settings: {
    ...defaultConfig.settings,
    styleCompat: 'react-native',
  },
});

export default config;

export type AppConfig = typeof config;

declare module 'tamagui' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends AppConfig {}
}
