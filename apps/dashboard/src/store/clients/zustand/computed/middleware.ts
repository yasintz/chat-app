import { StateCreator } from 'zustand';
import deepEqual from 'fast-deep-equal';
import { ComputedFieldType, getComputedFieldKeys, isComputed } from './helpers';

const middleware =
  (f: StateCreator<any>): StateCreator<any> =>
  (set, get, api) => {
    type T = ReturnType<typeof f>;

    const computeAndMerge = (state: T): T => {
      const computedState: Record<string, any> = {};
      const computedFields: Record<string, any> = {};

      function compute(key: string, field: ComputedFieldType<any, any>) {
        const { stateKey, fieldKey } = getComputedFieldKeys(key, field);

        computedState[stateKey] = field(state);

        field.$$initialized = true;
        computedFields[fieldKey] = field;
      }
      function batchCompute(field: ComputedFieldType<any, any>) {
        field.$$initialized = true;
        Object.assign(computedState, field(state));
      }

      Object.entries(state).forEach(([key, field]) => {
        if (isComputed(field)) {
          if (field.$$batch) {
            batchCompute(field);
          } else {
            compute(key, field);
          }
        }
      });

      const newState = { ...state, ...computedState, ...computedFields };

      for (const k of Object.keys(computedState)) {
        if (!deepEqual(state[k], computedState[k])) {
          newState[k] = computedState[k];
        }
      }

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

export default middleware;
