import shallow from 'zustand/shallow';
import { parseJwt, HasuraJwtPayloadType } from '../utils/jwt';
import { zustand, zustandComputed } from '@helpers/client';

type StoreType = {
  tokens?: {
    idToken: string;
    payload: HasuraJwtPayloadType;
  };
  setToken: (idToken: string) => void;
  logout: () => void;

  authenticated: boolean;
  customerId?: string;
};

const computed = zustandComputed<StoreType>();

const useAuthStore = zustand<StoreType>(
  (set) => ({
    tokens: undefined,
    setToken: (idToken) => {
      const payload = parseJwt<HasuraJwtPayloadType>(idToken);
      set({
        tokens: { idToken, payload },
      });
    },
    logout: () => set({ tokens: undefined }),
    authenticated: computed((s) => Boolean(s.tokens?.idToken)),
    customerId: computed(
      (s) =>
        s.tokens?.payload['https://hasura.io/jwt/claims']['x-hasura-user-id']
    ),
  }),
  {
    persist: { name: 'auth', getStorage: () => localStorage },
    equalityFn: shallow,
  }
);

export default useAuthStore;
