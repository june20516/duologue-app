import { z } from 'zod';

export const emailSchema = z.object({
  email: z.string().email('올바른 이메일 형식이 아닙니다'),
});

export const verifyCodeSchema = z.object({
  code: z.string().length(6, '인증 코드는 6자리입니다'),
});

export type EmailFormData = z.infer<typeof emailSchema>;
export type VerifyCodeFormData = z.infer<typeof verifyCodeSchema>;
