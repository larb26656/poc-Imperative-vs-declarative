import { ConditionFn } from "./condition";

export interface Menu<T> {
  label: string;
  condition: ConditionFn<T>;
}
