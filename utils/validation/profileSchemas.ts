import { z } from 'zod';

export const nicknameGenderSchema = z.object({
  nickname: z.string().min(1, '닉네임을 입력해주세요').max(20, '닉네임은 20자 이하로 입력해주세요'),
  gender: z.enum(['male', 'female', 'other'], { message: '성별을 선택해주세요' }),
});

export type NicknameGenderFormData = z.infer<typeof nicknameGenderSchema>;

export const interestsSchema = z.object({
  interestIds: z
    .array(z.number())
    .min(1, '최소 1개 이상의 관심사를 선택해주세요')
    .max(5, '최대 5개까지 선택 가능합니다'),
});

export type InterestsFormData = z.infer<typeof interestsSchema>;

export const optionalFieldsSchema = z.object({
  region: z.string().optional(),
  shortBio: z.string().max(200, '한줄소개는 200자 이하로 입력해주세요').optional(),
});

export type OptionalFieldsFormData = z.infer<typeof optionalFieldsSchema>;
