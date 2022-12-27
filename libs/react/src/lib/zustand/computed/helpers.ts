export type ComputeFn<S, R> = (s: S) => R;
export type ComputedFieldConfig = {
  $$computed: true;
  $$initialized: boolean;
  $$batch: boolean;
};

export type ComputedFieldType<S, R> = ComputeFn<S, R> & ComputedFieldConfig;

export const computedFieldPrefix = '$$computed_';
export const batchComputedFieldName = '$$batch_computed';

export const isComputed = <T extends ComputedFieldType<any, any>>(
  v: any
): v is T => Boolean(v?.$$computed && typeof v === 'function');

export function getComputedFieldKeys(
  key: string,
  field: ComputedFieldType<any, any>
) {
  const stateKey = field.$$initialized
    ? key.replace(computedFieldPrefix, '')
    : key;

  const fieldKey = field.$$initialized ? key : `${computedFieldPrefix}${key}`;

  return { stateKey, fieldKey };
}
