import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Progress, XStack, YStack } from 'tamagui';

import { FormInput } from '@/components/form/FormInput';
import { Button, Typography } from '@/components/ui';
import { verifyCodeSchema, VerifyCodeFormData } from '@/utils/validation/authSchemas';

const TEXTS = {
  title: '인증 코드를 입력해주세요',
  description: '이메일로 발송된 6자리 코드를 입력해주세요',
  codePlaceholder: '000000',
  codeLabel: '인증 코드',
  resendButton: '재전송',
  verifyButton: '확인',
  expiredMessage: '인증 코드가 만료되었습니다',
};

const TIMER_DURATION = 300;

export const CodeVerifyScreen: React.FC = () => {
  const router = useRouter();
  const { email } = useLocalSearchParams<{ email: string }>();
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const [isExpired, setIsExpired] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm<VerifyCodeFormData>({
    resolver: zodResolver(verifyCodeSchema),
    mode: 'onChange',
  });

  const codeValue = watch('code');

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsExpired(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    if (codeValue?.length === 6 && isValid && !isExpired) {
      handleSubmit(onSubmit)();
    }
  }, [codeValue, isValid, isExpired]);

  const onSubmit = (data: VerifyCodeFormData) => {
    console.log('Verify code:', data.code, 'for email:', email);
    router.push('/auth/profile-setup');
  };

  const handleResend = () => {
    setTimeLeft(TIMER_DURATION);
    setIsExpired(false);
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const progressValue = (timeLeft / TIMER_DURATION) * 100;

  return (
    <YStack flex={1} bg="$white" p="$4" gap="$4">
      <YStack gap="$2">
        <Typography type="title">{TEXTS.title}</Typography>
        <Typography type="regular" color="$gray600">
          {TEXTS.description}
        </Typography>
        {email && (
          <Typography type="caption" color="$gray400">
            {email}
          </Typography>
        )}
      </YStack>

      <FormInput
        control={control}
        name="code"
        label={TEXTS.codeLabel}
        placeholder={TEXTS.codePlaceholder}
        keyboardType="number-pad"
        maxLength={6}
      />

      <YStack gap="$2">
        <XStack justify="space-between" items="center">
          <Typography type="regular" color={isExpired ? '$error' : '$gray600'}>
            {isExpired ? TEXTS.expiredMessage : formatTime(timeLeft)}
          </Typography>
          <Button variant="outline" priority="secondary" size="sm" onPress={handleResend}>
            {TEXTS.resendButton}
          </Button>
        </XStack>
        <Progress value={progressValue} max={100}>
          <Progress.Indicator animation="bouncy" />
        </Progress>
      </YStack>

      <Button
        variant="filled"
        priority="primary"
        size="lg"
        disabled={!isValid || isExpired}
        onPress={handleSubmit(onSubmit)}
      >
        {TEXTS.verifyButton}
      </Button>
    </YStack>
  );
};

export default CodeVerifyScreen;
