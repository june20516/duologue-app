/**
 * Tamagui Configuration
 *
 * Duologue 디자인 시스템을 Tamagui 토큰으로 정의
 */
import { defaultConfig } from '@tamagui/config/v4';
import { createFont, createTamagui } from 'tamagui';

import { injectTokens, tokens } from './styles/tokens';

const pretendardFont = createFont({
  family: 'Pretendard',
  size: defaultConfig.fonts?.body?.size ?? {
    1: 11,
    2: 12,
    3: 13,
    4: 14,
    5: 16,
    6: 18,
    7: 20,
    8: 23,
    9: 30,
    10: 46,
  },
  weight: {
    4: '400',
    6: '600',
    7: '700',
  },
  face: {
    400: { normal: 'Pretendard' },
    600: { normal: 'Pretendard-SemiBold' },
    700: { normal: 'Pretendard-Bold' },
  },
});

// ========================================
// Themes (Light & Dark)
// ========================================

const lightTheme = {
  // Base
  background: tokens.color.offWhite,
  backgroundSoft: tokens.color.gray100,
  color: tokens.color.offBlack,
  colorSoft: tokens.color.gray600,
  colorSurface: tokens.color.offWhite, // 카드 배경
  shadowColor: tokens.color.gray200, // 일반 그림자

  // Primary (Lime)
  primary: tokens.color.lime,
  primaryHover: tokens.color.lime400,
  primaryPress: tokens.color.lime600,
  primarySurface: tokens.color.lime50,
  primarySurfaceHover: tokens.color.lime100, // 살짝 진해짐
  primarySurfacePress: tokens.color.lime200, // 더 진해짐
  colorOnPrimary: tokens.color.offBlack, // 라임 위 글자색

  // Secondary (Purple)
  secondary: tokens.color.purple,
  secondaryHover: tokens.color.purple400,
  secondaryPress: tokens.color.purple600,
  secondarySurface: tokens.color.purple50,
  secondarySurfaceHover: tokens.color.purple100,
  secondarySurfacePress: tokens.color.purple200,
  colorOnSecondary: tokens.color.offWhite, // 보라 위 글자색

  // Tertiary (Aqua)
  tertiary: tokens.color.aqua,
  tertiaryHover: tokens.color.aqua400,
  tertiaryPress: tokens.color.aqua600,
  tertiarySurface: tokens.color.aqua50,
  tertiarySurfaceHover: tokens.color.aqua100,
  tertiarySurfacePress: tokens.color.aqua200,
  colorOnTertiary: tokens.color.offBlack, // 아쿠아 위 글자색

  // UI Components
  borderColor: tokens.color.gray300,
  borderColorHover: tokens.color.lime,
  borderColorFocus: tokens.color.purple,
  borderColorError: tokens.color.error,

  inputBackground: tokens.color.offWhite,
  inputBackgroundDisabled: tokens.color.gray100,
  placeholderColor: tokens.color.gray400,

  // Semantic
  success: tokens.color.success,
  successBackground: tokens.color.successLight,
  error: tokens.color.error,
  errorBackground: tokens.color.errorLight,
  warning: tokens.color.warning,
  warningBackground: tokens.color.warningLight,
  info: tokens.color.info,
  infoBackground: tokens.color.infoLight,

  // TEMP: alias of *Background. Remove after Phase 2-D Toast cleanup (docs/tasks/pending/phase2-d-toast-semantic-cleanup.md)
  successLight: tokens.color.successLight,
  errorLight: tokens.color.errorLight,
  warningLight: tokens.color.warningLight,
  infoLight: tokens.color.infoLight,
};

const darkTheme = {
  // Base
  background: tokens.color.offBlack,
  backgroundSoft: tokens.color.gray900,
  color: tokens.color.offWhite,
  colorSoft: tokens.color.gray400,
  colorSurface: tokens.color.gray800, // 카드 배경

  // Neon Glow Effect
  shadowColor: tokens.color.lime,

  // Primary (Purple in Dark Mode)
  primary: tokens.color.purple,
  primaryHover: tokens.color.purple600,
  primaryPress: tokens.color.purple700,
  primarySurface: tokens.color.purple900,
  primarySurfaceHover: tokens.color.purple800, // 더 밝아짐 (빛 번짐 효과)
  primarySurfacePress: tokens.color.purple700, // 가장 밝아짐
  colorOnPrimary: tokens.color.offWhite,

  // Secondary (Lime in Dark Mode)
  secondary: tokens.color.lime,
  secondaryHover: tokens.color.lime600,
  secondaryPress: tokens.color.lime700,
  secondarySurface: tokens.color.lime900,
  secondarySurfaceHover: tokens.color.lime800,
  secondarySurfacePress: tokens.color.lime700,
  colorOnSecondary: tokens.color.offBlack,

  // Tertiary (Aqua in Dark Mode)
  tertiary: tokens.color.aqua,
  tertiaryHover: tokens.color.aqua600,
  tertiaryPress: tokens.color.aqua700,
  tertiarySurface: tokens.color.aqua900,
  tertiarySurfaceHover: tokens.color.aqua800,
  tertiarySurfacePress: tokens.color.aqua700,
  colorOnTertiary: tokens.color.offBlack,

  // UI Components
  borderColor: tokens.color.gray800,
  borderColorHover: tokens.color.aqua, // 네온 느낌 강조
  borderColorFocus: tokens.color.aqua,
  borderColorError: tokens.color.error,

  inputBackground: tokens.color.gray900,
  inputBackgroundDisabled: tokens.color.gray800,
  placeholderColor: tokens.color.gray600,

  // Semantic (배경색을 어둡게 조정)
  success: tokens.color.success,
  successBackground: tokens.color.successDark,
  error: tokens.color.error,
  errorBackground: tokens.color.errorDark,
  warning: tokens.color.warning,
  warningBackground: tokens.color.warningDark,
  info: tokens.color.info,
  infoBackground: tokens.color.infoDark,

  // TEMP: alias of *Background. Remove after Phase 2-D Toast cleanup (docs/tasks/pending/phase2-d-toast-semantic-cleanup.md)
  successLight: tokens.color.successDark,
  errorLight: tokens.color.errorDark,
  warningLight: tokens.color.warningDark,
  infoLight: tokens.color.infoDark,
};

// ========================================
// Configuration
// ========================================

const config = createTamagui({
  ...defaultConfig,
  tokens: injectTokens(defaultConfig),
  fonts: {
    ...defaultConfig.fonts,
    body: pretendardFont,
    heading: pretendardFont,
  },
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
