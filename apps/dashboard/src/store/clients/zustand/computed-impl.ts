import { StateCreator } from 'zustand';
import deepEqual from 'fast-deep-equal';

export const computedImpl =
  (f: StateCreator<any>): StateCreator<any> =>
  (set, get, api) => {
    type T = ReturnType<typeof f>;

    const computeAndMerge = (state: T): T => {
      const fullComputedState = state.computed
        ? state.computed({ ...state })
        : {};
      const newState = { ...fullComputedState, ...state };

      for (const k of Object.keys(fullComputedState))
        if (!deepEqual(state[k], fullComputedState[k]))
          newState[k] = fullComputedState[k];

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
