import { useRouter } from 'expo-router';
import { YStack } from 'tamagui';

import { Button, BaseModal, Typography } from '@/components/ui';
import { useUiStore } from '@/stores/uiStore';

export const GlobalErrorModal: React.FC = () => {
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
      title="로그인 필요"
      dismissOnOverlayPress={false}
    >
      <YStack gap="$4">
        <Typography>{errorModal.message}</Typography>
        <Button onPress={handleConfirm}>확인</Button>
      </YStack>
    </BaseModal>
  );
};
