import create, { StateCreator } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';
import { computedImpl, createComputed } from './computed-impl';
import { pipe } from './pipe';

type Config = {
  persist?: {
    name: string;
    keepOnLogout?: boolean;
  };
  equalityFn?: <T>(objA: T, objB: T) => boolean;
};

export const createStore = <S>(creator: StateCreator<S>, config: Config) => {
  type CreatorType = () => S;

  const persistKey = `${
    config.persist?.keepOnLogout ? 'keep-on-logout:' : ''
  }persistent-store:${config.persist?.name}`;

  const middleware = pipe<CreatorType>(
    immer,
    computedImpl,
    config.persist && ((i) => persist(i, { name: persistKey }))
  );

  const store = create(middleware(creator) as CreatorType);

  type ParamsType = Parameters<typeof store>;
  const storeHook = (selector: ParamsType[0], equals: ParamsType[1]) => {
    if (!equals && config.equalityFn) {
      return store(selector, config.equalityFn);
    }

    return store(selector, equals);
  };

  Object.assign(storeHook, store);
  return storeHook as typeof store;
};

export { createComputed };
