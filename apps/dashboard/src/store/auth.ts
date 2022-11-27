import shallow from 'zustand/shallow';
import { parseJwt, HasuraJwtPayloadType } from '../utils/jwt';
import { createComputed, createStore } from './clients/zustand';

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

const computed = createComputed<StoreType>();

const useAuthStore = createStore<StoreType>(
  (set, get, api) => ({
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
    persist: { name: 'auth' },
    equalityFn: shallow,
  }
);

export default useAuthStore;
