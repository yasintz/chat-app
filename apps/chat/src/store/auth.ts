import shallow from 'zustand/shallow';
import { parseJwt, HasuraJwtPayloadType } from '../utils/jwt';
import create, { computed as createComputed } from '@helpers/client/zustand';

type StoreType = {
  tokens?: {
    idToken: string;
    payload: HasuraJwtPayloadType;
  };
  setToken: (idToken: string) => void;
  logout: () => void;

  authenticated: boolean;
  memberId?: string;
};

const computed = createComputed<StoreType>();

const useAuthStore = create<StoreType>(
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
    memberId: computed(
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
