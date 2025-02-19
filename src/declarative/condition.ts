export type ConditionFn<T> = (input: T) => boolean;

export const and =
  <T>(...values: ConditionFn<T>[]): ConditionFn<T> =>
  (t: T): boolean =>
    values.every((fn) => fn(t));

export const any =
  <T>(...conditions: ConditionFn<T>[]): ConditionFn<T> =>
  (order) =>
    conditions.some((condition) => condition(order));

export const invert =
  <T>(condition: ConditionFn<T>): ConditionFn<T> =>
  (t: T) =>
    !condition(t);
