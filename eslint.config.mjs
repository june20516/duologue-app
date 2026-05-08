import expoConfig from 'eslint-config-expo/flat/default.js';
import prettierConfig from 'eslint-config-prettier';
import reactNativePlugin from 'eslint-plugin-react-native';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...expoConfig,
  prettierConfig,
  {
    ignores: ['dist/*', 'node_modules/*', '.expo/*', 'android/*', 'ios/*'],
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    rules: {
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { 'react-native': reactNativePlugin },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
      'react-native/no-inline-styles': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
    },
  },
]);
