import {
  ComputeFn,
  ComputedFieldConfig,
  batchComputedFieldName,
} from './helpers';
import middleware from './middleware';

type Computed = {
  <S>(): {
    <R>(compute: ComputeFn<S, R>): R;
    batch: <R>(compute: ComputeFn<S, R>) => R;
  };

  <S, R>(compute: ComputeFn<S, R>): R;
  batch: <S, R>(compute: ComputeFn<S, R>) => R;
  middleware: typeof middleware;
};

const computed: Computed = (compute?: any) => {
  if (!compute) {
    return computed;
  }

  const clone = compute.bind({});
  const config: ComputedFieldConfig = {
    $$computed: true,
    $$initialized: false,
    $$batch: false,
  };
  Object.assign(clone, config);
  return clone;
};

computed.batch = (compute): any => {
  const clone = compute.bind({});
  const config: ComputedFieldConfig = {
    $$computed: true,
    $$batch: true,
    $$initialized: false,
  };
  Object.assign(clone, config);

  return { [batchComputedFieldName]: clone };
};

computed.middleware = middleware;
const batch = computed.batch;

export { middleware, batch };
export default computed;
