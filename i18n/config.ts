import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enAuth from '@/locales/en/auth.json';
import enCommon from '@/locales/en/common.json';
import enOnboarding from '@/locales/en/onboarding.json';
import enProfile from '@/locales/en/profile.json';
import koAuth from '@/locales/ko/auth.json';
import koCommon from '@/locales/ko/common.json';
import koOnboarding from '@/locales/ko/onboarding.json';
import koProfile from '@/locales/ko/profile.json';

const resources = {
  ko: {
    auth: koAuth,
    common: koCommon,
    onboarding: koOnboarding,
    profile: koProfile,
  },
  en: {
    auth: enAuth,
    common: enCommon,
    onboarding: enOnboarding,
    profile: enProfile,
  },
};

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  resources,
  lng: getLocales()[0]?.languageCode || 'ko',
  ns: ['common', 'auth', 'onboarding', 'profile'],
  fallbackLng: 'ko',
  nsSeparator: '.',
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v4',
});

export default i18n;
