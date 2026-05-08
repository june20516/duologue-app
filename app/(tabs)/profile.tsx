import { router } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { YStack, XStack, ScrollView, Avatar } from 'tamagui';

import { authApi } from '@/api/auth';
import { HEADER_HEIGHT } from '@/components/layout/header/contstants';
import { Button, Spinner, Typography } from '@/components/ui';
import ConfirmModal from '@/components/ui/ConfirmModal';
import { useGender } from '@/hooks/useGender';
import { useQueryProfileMe } from '@/queries/useQueryProfile';
import { useAuthStore } from '@/stores/authStore';

const ProfileScreen = () => {
  const { t } = useTranslation();
  const { data: profile, isLoading } = useQueryProfileMe();
  const [logoutConfirmModalOpen, setLogoutConfirmModalOpen] = useState(false);
  const refreshToken = useAuthStore((state) => state.refreshToken);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const { getGenderLabel } = useGender();
  const insets = useSafeAreaInsets();

  const handleLogoutConfirmModalOpen = () => {
    setLogoutConfirmModalOpen(true);
  };

  const handleLogoutConfirmModalClose = () => {
    setLogoutConfirmModalOpen(false);
  };

  const handleLogout = async () => {
    try {
      if (refreshToken) {
        await authApi.logout(refreshToken);
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      clearAuth();
      router.replace('/');
    }
  };

  const handleEditProfile = () => {
    router.push('/profile/edit');
  };

  if (isLoading) {
    return (
      <YStack flex={1} bg="$background" justify="center" items="center">
        <Spinner size="large" />
      </YStack>
    );
  }

  if (!profile) {
    return (
      <YStack flex={1} bg="$background" justify="center" items="center" p="$4">
        <Typography type="title" mb="$2">
          {t('profile.view.not_found_title')}
        </Typography>
        <Typography type="regular" color="$gray600" mb="$4">
          {t('profile.view.not_found_description')}
        </Typography>
        <Button onPress={() => router.push('/onboarding')}>
          {t('profile.view.setup_profile')}
        </Button>
      </YStack>
    );
  }

  return (
    <YStack flex={1} bg="$background">
      <ScrollView flex={1} pt={insets.top + HEADER_HEIGHT}>
        <YStack p="$4" gap="$6">
          {/* 헤더 */}
          <XStack justify="space-between" items="center">
            <Typography type="title">{t('profile.view.title')}</Typography>

            {/* 수정 버튼 */}
            <Button variant="ghost" onPress={handleEditProfile}>
              {t('profile.view.edit')}
            </Button>
          </XStack>

          {/* 프로필 이미지 & 기본 정보 */}
          <YStack items="center" gap="$4">
            <Avatar circular size="$12" bg="$gray300">
              <Avatar.Image
                src={profile.profileImageUrl || undefined}
                alt={profile.nickname || t('profile.view.profile_image_alt')}
              />
              <Avatar.Fallback bg="$gray400">
                <Typography type="title" color="$white">
                  {profile.nickname?.charAt(0) || '?'}
                </Typography>
              </Avatar.Fallback>
            </Avatar>

            <YStack items="center" gap="$1">
              <Typography type="title">
                {profile.nickname || t('profile.view.nickname_placeholder')}
              </Typography>
              {profile.shortBio && (
                <Typography type="regular" color="$gray600" text="center">
                  {profile.shortBio}
                </Typography>
              )}
            </YStack>
          </YStack>

          {/* 프로필 정보 */}
          <YStack gap="$4" bg="$gray100" p="$4" rounded="$4">
            <YStack gap="$2">
              <Typography type="semiBold" color="$gray700">
                {t('profile.view.gender_label')}
              </Typography>
              <Typography type="regular">{getGenderLabel(profile.gender)}</Typography>
            </YStack>

            {profile.region && (
              <YStack gap="$2">
                <Typography type="semiBold" color="$gray700">
                  {t('profile.view.region_label')}
                </Typography>
                <Typography type="regular">{profile.region}</Typography>
              </YStack>
            )}

            {profile.interests && profile.interests.length > 0 && (
              <YStack gap="$2">
                <Typography type="semiBold" color="$gray700">
                  {t('profile.view.interests_label')}
                </Typography>
                <XStack gap="$2" flexWrap="wrap">
                  {profile.interests.map((interest) => (
                    <Button
                      key={interest.id}
                      variant="filled"
                      priority="primary"
                      size="sm"
                      readonly
                    >
                      {interest.displayName}
                    </Button>
                  ))}
                </XStack>
              </YStack>
            )}
          </YStack>

          <Button variant="ghost" priority="secondary" onPress={handleLogoutConfirmModalOpen}>
            {t('profile.view.logout')}
          </Button>
          <ConfirmModal
            open={logoutConfirmModalOpen}
            title={t('profile.view.logout_confirm_title')}
            onConfirm={handleLogout}
            onCancel={handleLogoutConfirmModalClose}
          >
            <Typography>{t('profile.view.logout_confirm_message')}</Typography>
          </ConfirmModal>
        </YStack>
      </ScrollView>
    </YStack>
  );
};

export default ProfileScreen;
