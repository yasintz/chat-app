import { createStore } from './clients/zustand';

type StoreType = {
  tokens?: {
    idToken: string;
  };
  setToken: (idToken: string) => void;
};

type StoreComputedType = {
  authenticated: string;
};

const useAuthStore = createStore<StoreType, StoreComputedType>(
  (set) => ({
    tokens: undefined,
    setToken: (idToken) => set({ tokens: { idToken } }),

    computed: (state) => ({
      authenticated: state.tokens?.idToken || '',
    }),
  }),
  {
    persist: { name: 'auth' },
  }
);

export default useAuthStore;
