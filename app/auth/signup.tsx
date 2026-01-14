import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { BackHandler } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { scheduleOnRN } from 'react-native-worklets';
import { Progress, XStack, YStack } from 'tamagui';

import FormInput from '@/components/form/FormInput';
import { Button, Typography } from '@/components/ui';
import { useTranslation } from '@/locales/useTranslation';
import { useRequestSignup, useVerifySignup } from '@/queries/useMutationAuth';
import {
  emailSchema,
  EmailFormData,
  verifyCodeSchema,
  VerifyCodeFormData,
} from '@/utils/validation/authSchemas';

const TIMER_DURATION = 300;

type AuthStep = 'email' | 'code';

export const SignupAuthScreen: React.FC = () => {
  const { t } = useTranslation();

  const [step, setStep] = useState<AuthStep>('email');
  const [email, setEmail] = useState('');
  const [timeLeft, setTimeLeft] = useState(TIMER_DURATION);
  const [isExpired, setIsExpired] = useState(false);

  const {
    mutate: requestSignup,
    isPending: isRequestingSignup,
    error: requestSignupError,
  } = useRequestSignup();
  const {
    mutate: verifySignup,
    isPending: isVerifyingSignup,
    error: verifySignupError,
  } = useVerifySignup();

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

  const handleEmailSubmit = (data: EmailFormData) => {
    requestSignup(data.email, {
      onSuccess: () => {
        setEmail(data.email);

        // Expand animation
        codeHeight.value = withTiming(400, { duration: 400 });
        codeOpacity.value = withTiming(1, { duration: 400 }, () => {
          scheduleOnRN(setStep, 'code');
        });
      },
    });
  };

  const handleCodeSubmit = useCallback(
    (data: VerifyCodeFormData) => {
      if (!email) return;

      verifySignup(
        { email, code: data.code },
        {
          onSuccess: () => {
            router.replace('/');
          },
        }
      );
    },
    [email, verifySignup]
  );

  const handleResend = () => {
    requestSignup(email, {
      onSuccess: () => {
        setTimeLeft(TIMER_DURATION);
        setIsExpired(false);
      },
    });
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
    <YStack flex={1} p="$4" gap="$4">
      {/* Email Section */}
      <YStack gap="$2">
        <Typography type="title">{t('auth.signup.emailTitle')}</Typography>
        <Typography type="regular" color="$gray600">
          {t('auth.signup.emailDescription')}
        </Typography>
      </YStack>

      <YStack gap="$2">
        <FormInput
          control={emailForm.control}
          name="email"
          label={t('auth.signup.emailLabel')}
          placeholder={t('auth.signup.emailPlaceholder')}
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          editable={step === 'email'}
        />
        {step === 'email' && requestSignupError && (
          <Typography type="caption" color="$error">
            {requestSignupError.message}
          </Typography>
        )}
      </YStack>

      {step === 'email' && (
        <Button
          variant="filled"
          priority="primary"
          size="lg"
          disabled={!emailForm.formState.isValid}
          loading={isRequestingSignup}
          onPress={emailForm.handleSubmit(handleEmailSubmit)}
        >
          {t('auth.signup.nextButton')}
        </Button>
      )}

      {/* Code Section - Animated */}
      <Animated.View style={codeAnimatedStyle}>
        <YStack gap="$4">
          <YStack gap="$2">
            <Typography type="title">{t('auth.signup.codeTitle')}</Typography>
            <Typography type="regular" color="$gray600">
              {t('auth.signup.codeDescription')}
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
              label={t('auth.signup.codeLabel')}
              placeholder={t('auth.signup.codePlaceholder')}
              keyboardType="number-pad"
              maxLength={6}
            />
            {verifySignupError && (
              <Typography type="caption" color="$error">
                {verifySignupError.message}
              </Typography>
            )}
          </YStack>

          <YStack gap="$2">
            <XStack justify="space-between" items="center">
              <Typography type="regular" color={isExpired ? '$error' : '$gray600'}>
                {isExpired ? t('auth.signup.expiredMessage') : formatTime(timeLeft)}
              </Typography>
              <Button
                variant="outline"
                priority="secondary"
                size="sm"
                onPress={handleResend}
                disabled={isRequestingSignup}
              >
                {t('auth.signup.resendButton')}
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
            disabled={!codeForm.formState.isValid || isExpired || isVerifyingSignup}
            loading={isVerifyingSignup}
            onPress={codeForm.handleSubmit(handleCodeSubmit)}
          >
            {t('auth.signup.verifyButton')}
          </Button>
        </YStack>
      </Animated.View>
    </YStack>
  );
};

export default SignupAuthScreen;
