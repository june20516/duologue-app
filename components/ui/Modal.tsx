import { Dialog, Sheet, Adapt, XStack, YStack, Text, DialogContentProps } from 'tamagui';

export type ModalVariant = 'adaptive' | 'dialog' | 'sheet';

interface BaseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  dismissOnOverlayPress?: boolean;
}

type ModalPropsWithVariant<T extends ModalVariant> = BaseModalProps & {
  variant: T;
} & (T extends 'sheet'
    ? { snapPoints?: number[] }
    : T extends 'adaptive'
      ? { snapPoints?: number[] }
      : unknown);

export type ModalProps =
  | ModalPropsWithVariant<'sheet'>
  | ModalPropsWithVariant<'dialog'>
  | (ModalPropsWithVariant<'adaptive'> & { variant?: 'adaptive' });

// 공통 상수
const SHEET_ANIMATION = {
  animation: '100ms' as const,
  animationConfig: {
    type: 'timing' as const,
    duration: 200,
  },
};

const DIALOG_CONTENT_PROPS: DialogContentProps = {
  bordered: true,
  elevate: true,
  animateOnly: ['transform', 'opacity'],
  animation: [
    'quick',
    {
      opacity: {
        overshootClamping: true,
      },
    },
  ],
  enterStyle: { x: 0, y: -20, opacity: 0, scale: 0.9 },
  exitStyle: { x: 0, y: 10, opacity: 0, scale: 0.95 },
  gap: '$4',
  bg: '$background',
  rounded: '$4',
  p: '$4',
  maxW: 500,
  mx: '$4',
};

const OVERLAY_PROPS = {
  animation: 'quick' as const,
  opacity: 0.5,
  enterStyle: { opacity: 0 },
  exitStyle: { opacity: 0 },
  bg: '$color' as const,
};

// 공통 컴포넌트
const ModalHeader: React.FC<{ title?: string; description?: string }> = ({
  title,
  description,
}) => {
  if (!title) return null;

  return (
    <XStack items="center" justify="space-between">
      <YStack gap="$2" flex={1}>
        <Text fontSize="$6" fontWeight="700" color="$color">
          {title}
        </Text>
        {description && (
          <Text fontSize="$3" color="$colorSoft">
            {description}
          </Text>
        )}
      </YStack>
    </XStack>
  );
};

const ModalOverlay: React.FC<{
  dismissOnOverlayPress?: boolean;
  onOpenChange: (open: boolean) => void;
}> = ({ dismissOnOverlayPress, onOpenChange }) => (
  <Dialog.Overlay
    key="overlay"
    {...OVERLAY_PROPS}
    onPress={dismissOnOverlayPress ? () => onOpenChange(false) : undefined}
  />
);

const SheetOverlay: React.FC = () => <Sheet.Overlay {...OVERLAY_PROPS} />;

const Modal: React.FC<ModalProps> = (props) => {
  const {
    open,
    onOpenChange,
    variant,
    title,
    description,
    children,
    dismissOnOverlayPress = true,
  } = props;

  const snapPoints = props.variant !== 'dialog' ? (props.snapPoints ?? [85]) : [];

  // Sheet only variant
  if (variant === 'sheet') {
    return (
      <Sheet
        modal
        open={open}
        onOpenChange={onOpenChange}
        snapPoints={snapPoints}
        dismissOnSnapToBottom
        dismissOnOverlayPress={dismissOnOverlayPress}
        {...SHEET_ANIMATION}
        zIndex={200000}
      >
        <SheetOverlay />
        <Sheet.Frame
          p="$4"
          gap="$4"
          bg="$background"
          borderTopLeftRadius="$4"
          borderTopRightRadius="$4"
        >
          <Sheet.Handle bg="$borderColor" />
          <ModalHeader title={title} description={description} />
          {children}
        </Sheet.Frame>
      </Sheet>
    );
  }

  // Dialog only variant
  if (variant === 'dialog') {
    return (
      <Dialog modal open={open} onOpenChange={onOpenChange}>
        <Dialog.Portal>
          <ModalOverlay dismissOnOverlayPress={dismissOnOverlayPress} onOpenChange={onOpenChange} />
          <Dialog.Content key="content" {...DIALOG_CONTENT_PROPS}>
            <ModalHeader title={title} description={description} />
            {children}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog>
    );
  }

  // Adaptive variant (default)
  return (
    <Dialog modal open={open} onOpenChange={onOpenChange}>
      <Adapt when="sm" platform="touch">
        <Sheet
          {...SHEET_ANIMATION}
          zIndex={200000}
          modal
          dismissOnSnapToBottom
          dismissOnOverlayPress
          snapPointsMode="fit"
        >
          <Sheet.Frame
            p="$4"
            gap="$4"
            bg="$background"
            borderTopLeftRadius="$4"
            borderTopRightRadius="$4"
          >
            <Adapt.Contents />
          </Sheet.Frame>
          <SheetOverlay />
        </Sheet>
      </Adapt>

      <Dialog.Portal>
        <ModalOverlay dismissOnOverlayPress={dismissOnOverlayPress} onOpenChange={onOpenChange} />
        <Dialog.Content key="content" {...DIALOG_CONTENT_PROPS}>
          <ModalHeader title={title} description={description} />
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
};

export default Modal;
