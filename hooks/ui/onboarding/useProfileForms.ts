import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useTranslation } from '@/locales/useTranslation';
import {
  InterestsFormData,
  interestsSchema,
  NicknameGenderFormData,
  nicknameGenderSchema,
  OptionalFieldsFormData,
  optionalFieldsSchema,
} from '@/utils/validation/profileSchemas';

const useProfileForms = () => {
  const { t } = useTranslation();

  const profileForm = useForm<NicknameGenderFormData>({
    resolver: zodResolver(nicknameGenderSchema),
    mode: 'onChange',
  });

  const genderOptions: { value: 'male' | 'female' | 'other'; label: string }[] = [
    { value: 'male', label: t('onboarding.profile.gender.male') },
    { value: 'female', label: t('onboarding.profile.gender.female') },
    { value: 'other', label: t('onboarding.profile.gender.other') },
  ];

  const interestsForm = useForm<InterestsFormData>({
    resolver: zodResolver(interestsSchema),
    mode: 'onChange',
    defaultValues: {
      interestIds: [],
    },
  });

  const optionalForm = useForm<OptionalFieldsFormData>({
    resolver: zodResolver(optionalFieldsSchema),
    mode: 'onChange',
  });

  return {
    profileForm,
    genderOptions,
    interestsForm,
    optionalForm,
  };
};

export default useProfileForms;
