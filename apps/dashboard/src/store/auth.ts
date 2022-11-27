import shallow from 'zustand/shallow';
import { parseJwt, HasuraJwtPayloadType } from '../utils/jwt';
import { createStore } from './clients/zustand';

type StoreType = {
  tokens?: {
    idToken: string;
    payload: HasuraJwtPayloadType;
  };
  setToken: (idToken: string) => void;
  logout: () => void;
};

type StoreComputedType = {
  authenticated: string;
  customerId?: string;
};

const useAuthStore = createStore<StoreType, StoreComputedType>(
  (set) => ({
    tokens: undefined,
    customerId: undefined,
    setToken: (idToken) => {
      const payload = parseJwt<HasuraJwtPayloadType>(idToken);
      set({
        tokens: { idToken, payload },
      });
    },
    logout: () => set({ tokens: undefined }),
    computed: (state) => ({
      authenticated: state.tokens?.idToken || '',
      customerId:
        state.tokens?.payload['https://hasura.io/jwt/claims'][
          'x-hasura-user-id'
        ],
    }),
  }),
  {
    persist: { name: 'auth' },
    equalityFn: shallow,
  }
);

export default useAuthStore;
