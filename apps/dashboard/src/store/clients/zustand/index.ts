import create, { StateCreator } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, devtools } from 'zustand/middleware';
import { computed } from 'zustand-computed';
import { environment } from '../../../environments/environment';

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

type Param<TState, TComputed> = {
  state: StateCreator<TState>;
  computed?: TComputed extends never ? never : (state: TState) => TComputed;
  persist?: {
    name: string;
    keepOnLogout?: boolean;
  };
};

export const createStore = <
  TState extends object,
  // eslint-disable-next-line @typescript-eslint/ban-types
  TComputed extends object = never
>(
  props: Param<TState, TComputed>
) => {
  type CreatorType = () => TState & TComputed;

  const persistKey = `${
    props.persist?.keepOnLogout ? 'keep-on-logout:' : ''
  }persistent-store:${props.persist?.name}`;

  const middleware = pipe<CreatorType>(
    immer,
    props.persist && ((i) => persist(i, { name: persistKey })),
    !environment.production &&
      ((i) => devtools(i, { name: props.persist?.name })),
    (i) => (props.computed ? computed(i, props.computed) : i)
  );

  return create(middleware(props.state) as CreatorType);
};
