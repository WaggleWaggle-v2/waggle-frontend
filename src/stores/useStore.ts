import { create } from 'zustand';

interface PageState {
  currentPage: number;
}

interface PageActions {
  updatePage: (newPage: number) => void;
  setInitialPage: () => void;
}

const usePageStore = create<PageState & PageActions>(set => ({
  currentPage: 0,
  updatePage: (newPage: number) => set(() => ({ currentPage: newPage })),
  setInitialPage: () => set(() => ({ currentPage: 0 })),
}));

export default usePageStore;
