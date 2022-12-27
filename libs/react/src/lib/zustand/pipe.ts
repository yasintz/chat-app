export const pipe =
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
