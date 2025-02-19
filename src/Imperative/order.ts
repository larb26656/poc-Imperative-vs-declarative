import { Order, OrderStatus, PaymentMethod } from "../model";

export function canPrintReceipt(order: Order): boolean {
  if (
    (order.status === OrderStatus.PENDING ||
      order.status === OrderStatus.SUCCESS) &&
    order.isPaid &&
    order.paymentDate instanceof Date
  ) {
    return true;
  }
  return false;
}

export function canViewQuotation(order: Order): boolean {
  if (
    order.status === OrderStatus.PENDING ||
    order.status === OrderStatus.SUCCESS
  ) {
    return true;
  }
  return false;
}

export function canDelete(order: Order): boolean {
  if (
    order.status !== OrderStatus.CANCEL &&
    order.status !== OrderStatus.SUCCESS &&
    order.isPaid &&
    order.paymentDate instanceof Date
  ) {
    return true;
  }
  return false;
}

export function isHaveDept(order: Order): boolean {
  if (
    order.status === OrderStatus.SUCCESS &&
    order.method === PaymentMethod.CREDIT_TERM &&
    !(order.paymentDate instanceof Date)
  ) {
    return true;
  }
  return false;
}
