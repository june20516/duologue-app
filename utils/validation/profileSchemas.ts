import { z } from 'zod';

import i18n from '@/i18n/config';

export const nicknameGenderSchema = z.object({
  nickname: z
    .string()
    .min(1, i18n.t('profile.validation.nickname.required'))
    .max(20, i18n.t('profile.validation.nickname.maxLength')),
  gender: z.enum(['male', 'female', 'others'], {
    message: i18n.t('profile.validation.gender.required'),
  }),
});

export type NicknameGenderFormData = z.infer<typeof nicknameGenderSchema>;

export const interestsSchema = z.object({
  interestIds: z
    .array(z.number())
    .min(1, i18n.t('profile.validation.interests.minLength'))
    .max(5, i18n.t('profile.validation.interests.maxLength')),
});

export type InterestsFormData = z.infer<typeof interestsSchema>;

export const optionalFieldsSchema = z.object({
  region: z.string().optional(),
  shortBio: z.string().max(200, i18n.t('profile.validation.shortBio.maxLength')).optional(),
});

export type OptionalFieldsFormData = z.infer<typeof optionalFieldsSchema>;
