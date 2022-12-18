import create, {
  computed as computedProvider,
} from '@chat-app/helpers/zustand';

type AuthStorageType = {
  token: string | undefined;
  user:
    | {
        id: string;
        username: string;
      }
    | undefined;
  isLoggedIn: boolean;
  login: (
    token: string,
    user: {
      id: string;
      username: string;
    }
  ) => void;
  logout: () => void;
};

const computed = computedProvider<AuthStorageType>();

export const useAuthStorage = create<AuthStorageType>(
  (set) => ({
    token: undefined,
    user: undefined,
    isLoggedIn: computed((s) => Boolean(s.token)),
    login: (token, user) => set({ token, user }),
    logout: () => set({ token: undefined, user: undefined }),
  }),
  {
    persist: {
      name: 'auth',
    },
  }
);
