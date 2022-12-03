import createStore, { StateCreator } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, StateStorage } from 'zustand/middleware';
import computed from './computed';
import { pipe } from './pipe';

type Config = {
  persist?: {
    name: string;
    keepOnLogout?: boolean;
    getStorage?: () => StateStorage;
  };
  equalityFn?: <T>(objA: T, objB: T) => boolean;
};

const create = <S>(creator: StateCreator<S>, config: Config) => {
  type CreatorType = () => S;

  const persistKey = `${
    config.persist?.keepOnLogout ? 'keep-on-logout:' : ''
  }persistent-store:${config.persist?.name}`;

  const storage = config.persist?.getStorage
    ? config.persist?.getStorage
    : () => localStorage;
  const middleware = pipe<CreatorType>(
    immer,
    computed.middleware,
    config.persist &&
      ((i) =>
        persist(i, {
          name: persistKey,
          getStorage: storage,
        }))
  );

  const store = createStore(middleware(creator) as CreatorType);

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

export default create;

export { computed };
