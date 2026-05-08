import { Stack } from 'expo-router';

const ProfileFlowLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="edit" />
    </Stack>
  );
};

export default ProfileFlowLayout;
