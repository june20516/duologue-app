import { XStack } from 'tamagui';

import i18n from '@/i18n/config';

import BaseModal from './BaseModal';
import Button from './Button';

export interface ConfirmModalProps {
  open: boolean;
  title: string;
  description?: string;
  children?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  onDismiss?: () => void;
}

const ConfirmModal = ({
  open,
  onDismiss,
  title,
  description,
  children,
  onCancel,
  onConfirm,
  confirmText = i18n.t('common.button.confirm'),
  cancelText = i18n.t('common.button.cancel'),
}: ConfirmModalProps) => {
  return (
    <BaseModal
      variant="dialog"
      title={title}
      description={description}
      open={open}
      onOpenChange={onDismiss}
      contentProps={{
        minW: 300,
      }}
    >
      {children}
      <XStack gap="$2">
        <Button variant="outline" onPress={onCancel} flex={1}>
          {cancelText}
        </Button>
        <Button onPress={onConfirm} flex={1}>
          {confirmText}
        </Button>
      </XStack>
    </BaseModal>
  );
};

export default ConfirmModal;
