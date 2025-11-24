import { defaultConfig } from '@tamagui/config/v4';
import { createTokens } from 'tamagui';

export const tokens = {
  color: {
    // Brand Colors (Core)
    lime: '#BFFF00', // Main Vivid
    purple: '#8F00FF', // Electric Violet
    aqua: '#00F3EA', // Neon Cyan

    // Lime Variations (Green-ish Yellow)
    lime50: '#F9FFE5',
    lime100: '#F2FFCC',
    lime200: '#E6FF99',
    lime300: '#D9FF66',
    lime400: '#CCFF33',
    lime500: '#BFFF00', // Base
    lime600: '#99CC00',
    lime700: '#739900',
    lime800: '#4C6600',
    lime900: '#263300', // Dark Mode Surface

    // Purple Variations (Electric Violet)
    purple50: '#F4E5FF',
    purple100: '#E2CCFF',
    purple200: '#D199FF',
    purple300: '#BF66FF',
    purple400: '#AE33FF',
    purple500: '#8F00FF', // Base
    purple600: '#7200CC',
    purple700: '#560099',
    purple800: '#390066',
    purple900: '#1D0033', // Dark Mode Surface

    // Aqua Variations (Neon Cyan)
    aqua50: '#E0FFFE',
    aqua100: '#CCFFFD',
    aqua200: '#99FFFB',
    aqua300: '#66FFF9',
    aqua400: '#33FFF7',
    aqua500: '#00F3EA', // Base
    aqua600: '#00C2BB',
    aqua700: '#00918C',
    aqua800: '#00615D',
    aqua900: '#00302E', // Dark Mode Surface

    // Semantic Colors
    success: '#10B981',
    successLight: '#D1FAE5',
    successDark: '#065F46',

    error: '#EF4444',
    errorLight: '#FEE2E2',
    errorDark: '#991B1B',

    warning: '#F59E0B',
    warningLight: '#FEF3C7',
    warningDark: '#92400E',

    info: '#3B82F6',
    infoLight: '#DBEAFE',
    infoDark: '#1E40AF',

    // Neutral Colors (Cool Grays)
    offWhite: '#F9FAFB',
    offBlack: '#050505', // 완전한 블랙보다는 깊은 회색
    white: '#FFFFFF',
    black: '#000000',
    gray50: '#F8FAFC',
    gray100: '#F1F5F9',
    gray200: '#E2E8F0',
    gray300: '#CBD5E1',
    gray400: '#94A3B8',
    gray500: '#64748B',
    gray600: '#475569',
    gray700: '#334155',
    gray800: '#1E293B',
    gray900: '#0F172A',
  },

  size: {},

  space: {},

  radius: {},
};

export const injectTokens = (config: typeof defaultConfig) =>
  createTokens({
    ...config.tokens,
    color: { ...tokens.color },
    size: { ...config.tokens.size, ...tokens.size },
    space: { ...config.tokens.space, ...tokens.space },
    radius: { ...config.tokens.radius, ...tokens.radius },
  });
