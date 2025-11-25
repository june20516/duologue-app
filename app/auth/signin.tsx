import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { BackHandler } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scheduleOnRN } from 'react-native-worklets';
import { Progress, XStack, YStack } from 'tamagui';

import { authApi } from '@/api/auth';
import FormInput from '@/components/form/FormInput';
import { Button, Typography } from '@/components/ui';
import { useAuthStore } from '@/stores/authStore';
import { useCommonStyle } from '@/styles/common';
import type { ApiError } from '@/types/api';
import {
  emailSchema,
  EmailFormData,
  verifyCodeSchema,
  VerifyCodeFormData,
} from '@/utils/validation/authSchemas';

const TEXTS = {
  emailTitle: '이메일을 입력해주세요',
  emailDescription: '인증 코드를 받을 이메일 주소를 입력해주세요',
  codeTitle: '인증 코드를 입력해주세요',
  codeDescription: '이메일로 발송된 6자리 코드를 입력해주세요',
  emailPlaceholder: 'example@email.com',
  emailLabel: '이메일',
  codeLabel: '인증 코드',
  codePlaceholder: '000000',
  nextButton: '다음',
  resendButton: '재전송',
  verifyButton: '확인',
  expiredMessage: '인증 코드가 만료되었습니다',
};

const TIMER_DURATION = 300;

type AuthStep = 'email' | 'code';

export const LoginAuthScreen: React.FC = () => {
  const router = useRouter();
  const { fullscreen } = useCommonStyle();
  const { setTokens } = useAuthStore();

  const [step, setStep] = useState<AuthStep>('email');
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const [isExpired, setIsExpired] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Animation
  const codeHeight = useSharedValue(0);
  const codeOpacity = useSharedValue(0);

  const emailForm = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    mode: 'onChange',
  });

  const codeForm = useForm<VerifyCodeFormData>({
    resolver: zodResolver(verifyCodeSchema),
    mode: 'onChange',
  });

  const codeValue = codeForm.watch('code');

  const codeAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: codeHeight.value,
      opacity: codeOpacity.value,
      overflow: 'hidden',
    };
  });

  const handleEmailSubmit = async (data: EmailFormData) => {
    try {
      setIsLoading(true);
      setError(null);
      await authApi.requestLogin(data.email);
      setEmail(data.email);

      // Expand animation
      codeHeight.value = withTiming(400, { duration: 400 });
      codeOpacity.value = withTiming(1, { duration: 400 }, () => {
        scheduleOnRN(setStep, 'code');
      });
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCodeSubmit = useCallback(
    async (data: VerifyCodeFormData) => {
      if (!email) return;

      try {
        setIsLoading(true);
        setError(null);
        const response = await authApi.verifyLogin(email, data.code);
        setTokens(response.access_token, response.refresh_token);
        router.replace('/');
      } catch (err) {
        const apiError = err as ApiError;
        setError(apiError.message);
      } finally {
        setIsLoading(false);
      }
    },
    [email, router, setTokens]
  );

  const handleResend = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await authApi.requestLogin(email);
      setTimeLeft(TIMER_DURATION);
      setIsExpired(false);
    } catch (err) {
      const apiError = err as ApiError;
      setError(apiError.message);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const progressValue = (timeLeft / TIMER_DURATION) * 100;

  // Timer
  useEffect(() => {
    if (step !== 'code') return;
    if (timeLeft <= 0) {
      setIsExpired(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [step, timeLeft]);

  // Auto-submit on 6 digits
  useEffect(() => {
    if (step === 'code' && codeValue?.length === 6 && codeForm.formState.isValid && !isExpired) {
      codeForm.handleSubmit(handleCodeSubmit)();
    }
  }, [codeValue, codeForm, isExpired, handleCodeSubmit, step]);

  // Block back button on code step
  useEffect(() => {
    if (step !== 'code') return;

    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      return true; // Block back
    });

    return () => backHandler.remove();
  }, [step]);

  return (
    <SafeAreaView style={[fullscreen]}>
      <YStack flex={1} bg="$white" p="$4" gap="$4">
        {/* Email Section */}
        <YStack gap="$2">
          <Typography type="title">{TEXTS.emailTitle}</Typography>
          <Typography type="regular" color="$gray600">
            {TEXTS.emailDescription}
          </Typography>
        </YStack>

        <YStack gap="$2">
          <FormInput
            control={emailForm.control}
            name="email"
            label={TEXTS.emailLabel}
            placeholder={TEXTS.emailPlaceholder}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            editable={step === 'email'}
          />
          {step === 'email' && error && (
            <Typography type="caption" color="$error">
              {error}
            </Typography>
          )}
        </YStack>

        {step === 'email' && (
          <Button
            variant="filled"
            priority="primary"
            size="lg"
            disabled={!emailForm.formState.isValid}
            loading={isLoading}
            onPress={emailForm.handleSubmit(handleEmailSubmit)}
          >
            {TEXTS.nextButton}
          </Button>
        )}

        {/* Code Section - Animated */}
        <Animated.View style={codeAnimatedStyle}>
          <YStack gap="$4">
            <YStack gap="$2">
              <Typography type="title">{TEXTS.codeTitle}</Typography>
              <Typography type="regular" color="$gray600">
                {TEXTS.codeDescription}
              </Typography>
              {email && (
                <Typography type="caption" color="$gray400">
                  {email}
                </Typography>
              )}
            </YStack>

            <YStack gap="$2">
              <FormInput
                control={codeForm.control}
                name="code"
                label={TEXTS.codeLabel}
                placeholder={TEXTS.codePlaceholder}
                keyboardType="number-pad"
                maxLength={6}
              />
              {error && (
                <Typography type="caption" color="$error">
                  {error}
                </Typography>
              )}
            </YStack>

            <YStack gap="$2">
              <XStack justify="space-between" items="center">
                <Typography type="regular" color={isExpired ? '$error' : '$gray600'}>
                  {isExpired ? TEXTS.expiredMessage : formatTime(timeLeft)}
                </Typography>
                <Button
                  variant="outline"
                  priority="secondary"
                  size="sm"
                  onPress={handleResend}
                  disabled={isLoading}
                >
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
              disabled={!codeForm.formState.isValid || isExpired || isLoading}
              loading={isLoading}
              onPress={codeForm.handleSubmit(handleCodeSubmit)}
            >
              {TEXTS.verifyButton}
            </Button>
          </YStack>
        </Animated.View>
      </YStack>
    </SafeAreaView>
  );
};

export default LoginAuthScreen;
