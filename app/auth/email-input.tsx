import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useForm } from 'react-hook-form';
import { YStack } from 'tamagui';

// eslint-disable-next-line import/no-named-as-default
import FormInput from '@/components/form/FormInput';
import { Button, Typography } from '@/components/ui';
import { emailSchema, EmailFormData } from '@/utils/validation/authSchemas';

const TEXTS = {
  title: '이메일을 입력해주세요',
  description: '인증 코드를 받을 이메일 주소를 입력해주세요',
  emailPlaceholder: 'example@email.com',
  emailLabel: '이메일',
  nextButton: '다음',
};

export const EmailInputScreen: React.FC = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: EmailFormData) => {
    router.push({
      pathname: '/auth/code-verify',
      params: { email: data.email },
    });
  };

  return (
    <YStack flex={1} bg="$white" p="$4" gap="$4">
      <YStack gap="$2">
        <Typography type="title">{TEXTS.title}</Typography>
        <Typography type="regular" color="$gray600">
          {TEXTS.description}
        </Typography>
      </YStack>

      <FormInput
        control={control}
        name="email"
        label={TEXTS.emailLabel}
        placeholder={TEXTS.emailPlaceholder}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
      />

      <Button
        variant="filled"
        priority="primary"
        size="lg"
        disabled={!isValid}
        onPress={handleSubmit(onSubmit)}
      >
        {TEXTS.nextButton}
      </Button>
    </YStack>
  );
};

export default EmailInputScreen;
