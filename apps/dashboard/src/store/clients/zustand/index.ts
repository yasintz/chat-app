import create, { StateCreator } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';
import { computedImpl } from './computed-impl';

const pipe =
  <T>(...fns: Array<((f: T) => any) | boolean | undefined>) =>
  (x: any) =>
    fns.reduce((v, f) => {
      if (typeof f !== 'function') {
        return v;
      }

      const res = f(v);
      if (typeof res !== 'function') {
        return v;
      }
      return res;
    }, x);

type Config = {
  persist?: {
    name: string;
    keepOnLogout?: boolean;
  };
};

export const createStore = <
  S extends object,
  C extends object = Record<string, unknown>
>(
  creator: StateCreator<
    S & {
      computed?: (s: S) => C;
    }
  >,
  config: Config
) => {
  type CreatorType = () => S & C;

  const persistKey = `${
    config.persist?.keepOnLogout ? 'keep-on-logout:' : ''
  }persistent-store:${config.persist?.name}`;

  const middleware = pipe<CreatorType>(
    immer,
    computedImpl,
    config.persist && ((i) => persist(i, { name: persistKey }))
  );

  return create(middleware(creator) as CreatorType);
};
