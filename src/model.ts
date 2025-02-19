import { ConditionFn } from "./declarative/condition";

export enum OrderStatus {
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  CANCEL = "CANCEL",
}

export enum PaymentMethod {
  BANK_TRANSFER = "BANK_TRANSFER",
  QR_PAYMENT = "QR_PAYMENT",
  CREDIT_TERM = "CREDIT_TERM",
}

export interface Order {
  id: number;
  amount: number;
  isPaid: boolean;
  paymentDate?: Date;
  method: PaymentMethod;
  status: OrderStatus;
}
