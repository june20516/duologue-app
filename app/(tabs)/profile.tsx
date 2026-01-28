import { router } from 'expo-router';
import { Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { YStack, XStack, ScrollView, Avatar } from 'tamagui';

import { authApi } from '@/api/auth';
import { HEADER_HEIGHT } from '@/components/layout/header/contstants';
import { Button, Spinner, Typography } from '@/components/ui';
import { useGender } from '@/hooks/useGender';
import { useQueryProfileMe } from '@/queries/useQueryProfile';
import { useAuthStore } from '@/stores/authStore';

const ProfileScreen = () => {
  const { data: profile, isLoading } = useQueryProfileMe();
  const refreshToken = useAuthStore((state) => state.refreshToken);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const { getGenderLabel } = useGender();
  const insets = useSafeAreaInsets();

  const handleLogout = () => {
    Alert.alert('로그아웃', '로그아웃 하시겠습니까?', [
      { text: '취소', style: 'cancel' },
      {
        text: '로그아웃',
        style: 'destructive',
        onPress: async () => {
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
        },
      },
    ]);
  };

  const handleEditProfile = () => {
    router.push('/profile/edit');
  };

  if (isLoading) {
    return (
      <YStack flex={1} bg="$background" justify="center" items="center">
        <Spinner size="medium" />
        <Typography mt="$4">프로필을 불러오는 중...</Typography>
      </YStack>
    );
  }

  if (!profile) {
    return (
      <YStack flex={1} bg="$background" justify="center" items="center" p="$4">
        <Typography type="title" mb="$2">
          프로필을 찾을 수 없습니다
        </Typography>
        <Typography type="regular" color="$gray600" mb="$4">
          프로필 설정을 완료해주세요
        </Typography>
        <Button onPress={() => router.push('/onboarding')}>프로필 설정하기</Button>
      </YStack>
    );
  }

  return (
    <YStack flex={1} bg="$background">
      <ScrollView flex={1} pt={insets.top + HEADER_HEIGHT}>
        <YStack p="$4" gap="$6">
          {/* 헤더 */}
          <XStack justify="space-between" items="center">
            <Typography type="title">내 프로필</Typography>
            <Button variant="ghost" priority="secondary" onPress={handleLogout}>
              로그아웃
            </Button>
          </XStack>

          {/* 프로필 이미지 & 기본 정보 */}
          <YStack items="center" gap="$4">
            <Avatar circular size="$12" bg="$gray300">
              <Avatar.Image
                src={profile.profileImageUrl || undefined}
                alt={profile.nickname || '프로필 이미지'}
              />
              <Avatar.Fallback bg="$gray400">
                <Typography type="title" color="$white">
                  {profile.nickname?.charAt(0) || '?'}
                </Typography>
              </Avatar.Fallback>
            </Avatar>

            <YStack items="center" gap="$1">
              <Typography type="title">{profile.nickname || '닉네임 없음'}</Typography>
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
                성별
              </Typography>
              <Typography type="regular">{getGenderLabel(profile.gender)}</Typography>
            </YStack>

            {profile.region && (
              <YStack gap="$2">
                <Typography type="semiBold" color="$gray700">
                  지역
                </Typography>
                <Typography type="regular">{profile.region}</Typography>
              </YStack>
            )}

            {profile.interests && profile.interests.length > 0 && (
              <YStack gap="$2">
                <Typography type="semiBold" color="$gray700">
                  관심사
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

          {/* 수정 버튼 */}
          <Button onPress={handleEditProfile}>프로필 수정</Button>
        </YStack>
      </ScrollView>
    </YStack>
  );
};

export default ProfileScreen;
