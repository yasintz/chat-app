import shallow from 'zustand/shallow';
import { parseJwt, HasuraJwtPayloadType } from '../utils/jwt';
import { createStore } from './clients/zustand';
import createComputed from './clients/zustand/computed';

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
    persist: { name: 'auth' },
    equalityFn: shallow,
  }
);

export default useAuthStore;
