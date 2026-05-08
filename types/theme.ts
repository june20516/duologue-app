/**
 * Theme Type Definitions
 *
 * Tamagui 토큰 타입은 tamagui.config.ts에서 자동 생성됩니다.
 * 이 파일은 legacy 타입만 포함합니다.
 */

import { Colors, Fonts } from '@/constants/theme';

export type ColorScheme = 'light' | 'dark';
export type LegacyColors = typeof Colors;
export type LegacyFonts = typeof Fonts;
