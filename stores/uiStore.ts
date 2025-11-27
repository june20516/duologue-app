import { create } from 'zustand';

interface TabBarState {
  isVisible: boolean;
  lastScrollY: number;
}

interface ErrorModalState {
  isVisible: boolean;
  message: string;
}

interface UiState {
  tabBar: TabBarState;
  errorModal: ErrorModalState;
  handleTabBarScroll: (currentScrollY: number, previousScrollY?: number) => void;
  showTabBar: () => void;
  hideTabBar: () => void;
  resetTabBar: () => void;
  showErrorModal: (message: string) => void;
  hideErrorModal: () => void;
}

const INITIAL_TAB_BAR_STATE: TabBarState = {
  isVisible: true,
  lastScrollY: 0,
};

const INITIAL_ERROR_MODAL_STATE: ErrorModalState = {
  isVisible: false,
  message: '',
};

const SCROLL_THRESHOLD = 5;

export const useUiStore = create<UiState>((set) => ({
  tabBar: INITIAL_TAB_BAR_STATE,
  errorModal: INITIAL_ERROR_MODAL_STATE,

  handleTabBarScroll: (currentScrollY: number, previousScrollY?: number) =>
    set((state) => {
      const prevY = previousScrollY ?? state.tabBar.lastScrollY;
      const scrollDiff = currentScrollY - prevY;

      if (Math.abs(scrollDiff) < SCROLL_THRESHOLD) {
        return {
          tabBar: {
            ...state.tabBar,
            lastScrollY: currentScrollY,
          },
        };
      }

      const isScrollingDown = scrollDiff > 0;
      const shouldHide = isScrollingDown && currentScrollY > 50;
      const shouldShow = !isScrollingDown || currentScrollY <= 50;

      return {
        tabBar: {
          isVisible: shouldShow || !shouldHide,
          lastScrollY: currentScrollY,
        },
      };
    }),

  showTabBar: () =>
    set((state) => ({
      tabBar: {
        ...state.tabBar,
        isVisible: true,
      },
    })),

  hideTabBar: () =>
    set((state) => ({
      tabBar: {
        ...state.tabBar,
        isVisible: false,
      },
    })),

  resetTabBar: () =>
    set({
      tabBar: INITIAL_TAB_BAR_STATE,
    }),

  showErrorModal: (message: string) =>
    set({
      errorModal: {
        isVisible: true,
        message,
      },
    }),

  hideErrorModal: () =>
    set({
      errorModal: INITIAL_ERROR_MODAL_STATE,
    }),
}));
