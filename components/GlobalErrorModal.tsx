import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { YStack } from 'tamagui';

import { Button, BaseModal, Typography } from '@/components/ui';
import { useUiStore } from '@/stores/uiStore';

export const GlobalErrorModal: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const errorModal = useUiStore((state) => state.errorModal);
  const hideErrorModal = useUiStore((state) => state.hideErrorModal);

  const handleConfirm = () => {
    hideErrorModal();
    router.replace('/');
  };

  return (
    <BaseModal
      variant="dialog"
      open={errorModal.isVisible}
      onOpenChange={(open) => {
        if (!open) {
          handleConfirm();
        }
      }}
      dismissOnOverlayPress={false}
    >
      <YStack gap="$4">
        <Typography>{errorModal.message}</Typography>
        <Button onPress={handleConfirm}>{t('common.button.confirm')}</Button>
      </YStack>
    </BaseModal>
  );
};
