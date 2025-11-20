import { defaultConfig } from '@tamagui/config/v4';
import { createTokens } from 'tamagui';

export const tokens = {
  color: {
    // Brand Colors
    lime: '#BFFF00',
    purple: '#6A0DAD',

    // Lime Variations (Primary)
    lime50: '#F7FFE5',
    lime100: '#EFFFCC',
    lime200: '#E6FF99',
    lime300: '#DDFF66',
    lime400: '#D4FF33',
    lime500: '#BFFF00',
    lime600: '#99CC00',
    lime700: '#739900',
    lime800: '#4D6600',
    lime900: '#263300',

    // Purple Variations (Secondary)
    purple50: '#F3E5FF',
    purple100: '#E6CCFF',
    purple200: '#CC99FF',
    purple300: '#B366FF',
    purple400: '#9933FF',
    purple500: '#6A0DAD',
    purple600: '#550A8A',
    purple700: '#400868',
    purple800: '#2A0545',
    purple900: '#150323',

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

    // Neutral Colors
    offWhite: '#F9FAFB',
    offBlack: '#1A1A1A',
    white: '#FFFFFF',
    gray50: '#F5F5F5',
    gray100: '#F3F4F6',
    gray200: '#E5E7EB',
    gray300: '#D1D5DB',
    gray400: '#9CA3AF',
    gray500: '#6B7280',
    gray600: '#4B5563',
    gray700: '#374151',
    gray800: '#1F2937',
    gray900: '#111827',
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
