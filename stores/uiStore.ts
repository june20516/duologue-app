import { create } from 'zustand';

interface TabBarState {
  isVisible: boolean;
  lastScrollY: number;
}

interface UiState {
  tabBar: TabBarState;
  handleTabBarScroll: (currentScrollY: number, previousScrollY?: number) => void;
  showTabBar: () => void;
  hideTabBar: () => void;
  resetTabBar: () => void;
}

const INITIAL_TAB_BAR_STATE: TabBarState = {
  isVisible: true,
  lastScrollY: 0,
};

const SCROLL_THRESHOLD = 5;

export const useUiStore = create<UiState>((set) => ({
  tabBar: INITIAL_TAB_BAR_STATE,

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
}));
