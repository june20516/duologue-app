import { z } from 'zod';

import i18n from '@/i18n/config';

export const emailSchema = z.object({
  email: z.string().email(i18n.t('auth.validation.email.invalid')),
});

export const verifyCodeSchema = z.object({
  code: z.string().length(6, i18n.t('auth.validation.code.length')),
});

export type EmailFormData = z.infer<typeof emailSchema>;
export type VerifyCodeFormData = z.infer<typeof verifyCodeSchema>;
