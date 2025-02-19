import { Order, OrderStatus, PaymentMethod } from "../model";
import { and, ConditionFn, invert } from "./condition";

export type OrderCondition = ConditionFn<Order>;

export const statusIn =
  (statuses: OrderStatus[]): OrderCondition =>
  (order) =>
    statuses.includes(order.status);

export const statusNotIn =
  (statuses: OrderStatus[]): OrderCondition =>
  (order) =>
    !statuses.includes(order.status);

export const paymentMethodIn =
  (paymentMethods: PaymentMethod[]): OrderCondition =>
  (order) =>
    paymentMethods.includes(order.method);

export const hasPaid: OrderCondition = (order) => order.isPaid;

export const hasPaymentDate: OrderCondition = (order) =>
  order.paymentDate instanceof Date;

export const canPrintReceipt: OrderCondition = and(
  statusIn([OrderStatus.PENDING, OrderStatus.SUCCESS]),
  hasPaid,
  hasPaymentDate
);

export const canViewQuatation: OrderCondition = and(
  statusIn([OrderStatus.PENDING, OrderStatus.SUCCESS])
);

export const canDelete: OrderCondition = and(
  statusNotIn([OrderStatus.CANCEL, OrderStatus.SUCCESS]),
  hasPaid,
  hasPaymentDate
);

export const hasOutstandingDebt: OrderCondition = and(
  statusIn([OrderStatus.SUCCESS]),
  paymentMethodIn([PaymentMethod.CREDIT_TERM]),
  invert(hasPaymentDate)
);

// ตรวจสอบว่า order.status อยู่ใน status ที่กำหนดหรือไม่
