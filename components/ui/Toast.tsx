import { CheckCircle, XCircle, AlertCircle, Info } from 'lucide-react-native';
import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { scheduleOnRN } from 'react-native-worklets';
import { YStack, XStack, Text, StackProps, TextProps } from 'tamagui';

import { tokens } from '@/styles/tokens';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastMessage {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  duration?: number;
  shouldClose?: boolean;
}

interface ToastContextType {
  showToast: (toast: Omit<ToastMessage, 'id'>) => void;
  hideToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};

// Toast Icon 매핑
const ToastIcon: Record<ToastType, React.ComponentType<{ size?: number; color?: string }>> = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
  info: Info,
};

// Toast 색상 매핑
const toastColors: Record<ToastType, StackProps & { icon: string } & TextProps> = {
  success: {
    bg: '$successLight',
    borderColor: '$success',
    color: '$success',
    icon: tokens.color.success,
  },
  error: {
    bg: '$errorLight',
    borderColor: '$error',
    color: '$error',
    icon: tokens.color.error,
  },
  warning: {
    bg: '$warningLight',
    borderColor: '$warning',
    color: '$warning',
    icon: tokens.color.warning,
  },
  info: {
    bg: '$infoLight',
    borderColor: '$info',
    color: '$info',
    icon: tokens.color.info,
  },
};

const ToastItem: React.FC<{
  toast: ToastMessage;
  onClose: () => void;
  shouldClose: boolean;
}> = ({ toast, onClose, shouldClose }) => {
  const Icon = ToastIcon[toast.type];
  const colors = toastColors[toast.type];

  const translateY = useSharedValue(-100);
  const opacity = useSharedValue(0);

  // 마운트 시 애니메이션 (위에서 아래로)
  useEffect(() => {
    translateY.value = withTiming(0, { duration: 200 });
    opacity.value = withTiming(1, { duration: 200 });
  }, [opacity, translateY]);

  // 닫기 애니메이션 worklet
  const closeWithAnimation = useCallback(() => {
    'worklet';
    translateY.value = withTiming(-100, { duration: 200 });
    opacity.value = withTiming(0, { duration: 200 }, (finished) => {
      if (finished) {
        scheduleOnRN(onClose);
      }
    });
  }, [onClose, translateY, opacity]);

  // shouldClose가 true로 변경되면 닫기 애니메이션 실행
  useEffect(() => {
    if (shouldClose) {
      closeWithAnimation();
    }
  }, [shouldClose, closeWithAnimation]);

  // 스와이프 제스처 (위로 올리면 닫기)
  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      'worklet';
      if (event.translationY < 0) {
        translateY.value = event.translationY;
      }
    })
    .onEnd((event) => {
      'worklet';
      if (event.translationY < -50) {
        // 50px 이상 위로 스와이프하면 닫기
        closeWithAnimation();
      } else {
        translateY.value = withTiming(0);
      }
    });

  // 탭 제스처 (터치하면 닫기)
  const tapGesture = Gesture.Tap().onEnd(() => {
    'worklet';
    closeWithAnimation();
  });

  const composedGesture = Gesture.Race(panGesture, tapGesture);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  return (
    <GestureDetector gesture={composedGesture}>
      <Animated.View style={animatedStyle}>
        <XStack
          gap="$3"
          items="center"
          bg={colors.bg}
          borderWidth={1}
          borderColor={colors.borderColor}
          rounded="$3"
          p="$3"
          shadowColor={colors.borderColor}
          shadowOffset={{ width: 0, height: 2 }}
          shadowOpacity={0.1}
          shadowRadius={4}
          elevation={2}
        >
          <Icon size={20} color={colors.icon} />
          <YStack flex={1} gap="$1">
            {toast.title && (
              <Text fontSize="$4" fontWeight="600" color={colors.color}>
                {toast.title}
              </Text>
            )}
            <Text fontSize="$3" color={colors.color}>
              {toast.message}
            </Text>
          </YStack>
        </XStack>
      </Animated.View>
    </GestureDetector>
  );
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const insets = useSafeAreaInsets();

  const hideToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const requestClose = useCallback((id: string) => {
    setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, shouldClose: true } : t)));
  }, []);

  const showToast = useCallback(
    (toast: Omit<ToastMessage, 'id'>) => {
      const id = Date.now().toString();
      const newToast: ToastMessage = { ...toast, id, shouldClose: false };

      setToasts((prev) => [...prev, newToast]);

      // Auto-dismiss after duration - 애니메이션 먼저 트리거
      const duration = toast.duration || 3000;
      setTimeout(() => {
        requestClose(id);
      }, duration);
    },
    [requestClose]
  );

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <YStack
        position="absolute"
        t={insets.top}
        l="$4"
        r="$4"
        gap="$2"
        z="$4"
        pointerEvents="box-none"
      >
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            toast={toast}
            onClose={() => hideToast(toast.id)}
            shouldClose={toast.shouldClose || false}
          />
        ))}
      </YStack>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
