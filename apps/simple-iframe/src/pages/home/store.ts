import create, {
  computed as computedProvider,
} from '@chat-app/helpers/zustand';

type AuthStorageType = {
  token: string | undefined;
  isLoggedIn: boolean;
  setToken: (token: string) => void;
};

const computed = computedProvider<AuthStorageType>();

export const useAuthStorage = create<AuthStorageType>(
  (set) => ({
    token: undefined,
    isLoggedIn: computed((s) => Boolean(s.token)),
    setToken: (token) => set({ token }),
  }),
  {
    persist: {
      name: 'auth',
    },
  }
);
