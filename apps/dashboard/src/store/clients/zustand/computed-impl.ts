import { StateCreator } from 'zustand';
import deepEqual from 'fast-deep-equal';

export type ComputedCreator<S, R> = (s: S) => R;
export type ComputedFieldType<S, R> = ComputedCreator<S, R> & {
  $$computed: true;
  initialized: boolean;
};

export const createComputed = <S>() => {
  return <R>(compute: ComputedCreator<S, R>): R => {
    const clone = compute.bind({});
    Object.assign(clone, {
      $$computed: true,
      initialized: false,
    });
    return clone as R;
  };
};

const isComputed = <T extends ComputedFieldType<any, any>>(v: any): v is T => {
  return Boolean(v?.$$computed && typeof v === 'function');
};

const computedFieldPrefix = '$$computed_';

export const computedImpl =
  (f: StateCreator<any>): StateCreator<any> =>
  (set, get, api) => {
    type T = ReturnType<typeof f>;

    const computeAndMerge = (state: T): T => {
      const computedState: Record<string, any> = {};
      const computedFields: Record<string, any> = {};
      Object.keys(state).forEach((key) => {
        const field = state[key];
        if (isComputed(field)) {
          const stateKey = field.initialized
            ? key.replace(computedFieldPrefix, '')
            : key;

          const computedFieldKey = field.initialized
            ? key
            : `${computedFieldPrefix}${key}`;

          computedState[stateKey] = field(state);
          computedFields[computedFieldKey] = Object.assign(field, {
            initialized: true,
          });
        }
      });

      const newState = { ...computedState, ...state, ...computedFields };

      for (const k of Object.keys(computedState))
        if (!deepEqual(state[k], computedState[k]))
          newState[k] = computedState[k];

      return newState;
    };

    const setWithComputed = (
      update: T | ((state: T) => T),
      replace?: boolean
    ) => {
      set((state: T): T => {
        const updated = typeof update === 'object' ? update : update(state);
        return computeAndMerge({ ...state, ...updated });
      }, replace);
    };

    api.setState = setWithComputed;
    const st = f(setWithComputed, get, api);
    return Object.assign({}, st, computeAndMerge(st));
  };
