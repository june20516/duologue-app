import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { useGender } from '@/hooks/useGender';
import {
  InterestsFormData,
  interestsSchema,
  NicknameGenderFormData,
  nicknameGenderSchema,
  OptionalFieldsFormData,
  optionalFieldsSchema,
} from '@/utils/validation/profileSchemas';

const useProfileForms = () => {
  const { genderOptions } = useGender();

  const profileForm = useForm<NicknameGenderFormData>({
    resolver: zodResolver(nicknameGenderSchema),
    mode: 'onChange',
  });

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
