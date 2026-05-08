import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { Me } from '@/models/user';

interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  me: Me | null;
  setAuthenticated: (isAuthenticated: boolean) => void;
  setTokens: (accessToken: string, refreshToken: string) => void;
  setMe: (me: Me) => void;
  updateProfile: (
    data: Partial<
      Pick<Me, 'nickname' | 'gender' | 'region' | 'shortBio' | 'profileImageUrl' | 'interests'>
    >
  ) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      accessToken: null,
      refreshToken: null,
      me: null,

      setAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),

      setTokens: (accessToken: string, refreshToken: string) =>
        set({
          accessToken,
          refreshToken,
          isAuthenticated: true,
        }),

      setMe: (me: Me) => set({ me }),

      updateProfile: (
        data: Partial<
          Pick<Me, 'nickname' | 'gender' | 'region' | 'shortBio' | 'profileImageUrl' | 'interests'>
        >
      ) =>
        set((state) => {
          if (!state.me) return state;

          const updatedMe = { ...state.me, ...data };
          const isComplete = !!(updatedMe.nickname && updatedMe.gender);

          return {
            me: {
              ...updatedMe,
              profileComplete: isComplete,
            },
          };
        }),

      clearAuth: () =>
        set({
          isAuthenticated: false,
          accessToken: null,
          refreshToken: null,
          me: null,
        }),
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
