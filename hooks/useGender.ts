import { useTranslation } from '@/locales/useTranslation';
import type { Gender } from '@/types/gender';

export const useGender = () => {
  const { t } = useTranslation();

  const genderOptions: { value: Gender; label: string }[] = [
    { value: 'male', label: t('common.gender.male') },
    { value: 'female', label: t('common.gender.female') },
    { value: 'others', label: t('common.gender.others') },
  ];

  const getGenderLabel = (gender: Gender | null | undefined): string => {
    if (!gender) {
      return t('common.gender.unspecified');
    }

    switch (gender) {
      case 'male':
        return t('common.gender.male');
      case 'female':
        return t('common.gender.female');
      case 'others':
        return t('common.gender.others');
      default:
        return t('common.gender.unspecified');
    }
  };

  return {
    genderOptions,
    getGenderLabel,
  };
};
