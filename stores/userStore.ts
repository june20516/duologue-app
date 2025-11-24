import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface Profile {
  name: string | null;
  age: number | null;
  interests: string[];
  // TODO: Phase 1에서 실제 프로필 필드 정의
}

interface UserState {
  profile: Profile;
  isProfileComplete: boolean;
  setProfile: (data: Partial<Profile>) => void;
  reset: () => void;
}

const INITIAL_PROFILE: Profile = {
  name: null,
  age: null,
  interests: [],
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      profile: INITIAL_PROFILE,
      isProfileComplete: false,

      setProfile: (data: Partial<Profile>) =>
        set((state) => {
          const newProfile = { ...state.profile, ...data };
          // 최소 필수 입력: name, age
          const isComplete = !!(newProfile.name && newProfile.age);

          return {
            profile: newProfile,
            isProfileComplete: isComplete,
          };
        }),

      reset: () =>
        set({
          profile: INITIAL_PROFILE,
          isProfileComplete: false,
        }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
