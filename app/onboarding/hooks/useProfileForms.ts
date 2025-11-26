import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  InterestsFormData,
  interestsSchema,
  NicknameGenderFormData,
  nicknameGenderSchema,
  OptionalFieldsFormData,
  optionalFieldsSchema,
} from '@/utils/validation/profileSchemas';

export const useProfileForms = () => {
  const profileForm = useForm<NicknameGenderFormData>({
    resolver: zodResolver(nicknameGenderSchema),
    mode: 'onChange',
  });

  const genderOptions: { value: 'male' | 'female' | 'other'; label: string }[] = [
    { value: 'male', label: '남성' },
    { value: 'female', label: '여성' },
    { value: 'other', label: '기타' },
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
