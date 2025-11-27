import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AppState {
  isFirstLaunch: boolean;
  setFirstLaunch: (value: boolean) => void;
  reset: () => void;
}

const INITIAL_STATE = {
  isFirstLaunch: true,
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      ...INITIAL_STATE,

      setFirstLaunch: (value: boolean) => set({ isFirstLaunch: value }),

      reset: () => set(INITIAL_STATE),
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
