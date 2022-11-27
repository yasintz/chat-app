import create, { StateCreator } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist } from 'zustand/middleware';
import { computedImpl } from './computed-impl';
import { pipe } from './pipe';

type Config = {
  persist?: {
    name: string;
    keepOnLogout?: boolean;
  };
  equalityFn?: <T>(objA: T, objB: T) => boolean;
};

type CreatorType<S, C> = StateCreator<
  S & {
    computed?: (s: S) => C;
  }
>;

export const createStore = <S, C = Record<string, unknown>>(
  creator: CreatorType<S, C>,
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
