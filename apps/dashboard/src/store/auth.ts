import { createStore } from './clients/zustand';

type StoreType = {
  tokens?: {
    idToken: string;
  };
  setToken: (idToken: string) => void;
};

type StoreComputedType = {
  authenticated: boolean;
};

const useAuthStore = createStore<StoreType, StoreComputedType>({
  state: (set) => ({
    tokens: undefined,
    setToken: (idToken) => set({ tokens: { idToken } }),
  }),
  computed: (state) => ({
    authenticated: Boolean(state.tokens?.idToken),
  }),
  persist: { name: 'auth' },
});

export default useAuthStore;
