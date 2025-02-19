import { Order, OrderStatus, PaymentMethod } from "./model";

export const orders: Order[] = [
  {
    id: 1,
    amount: 200,
    isPaid: true,
    paymentDate: new Date(),
    method: PaymentMethod.QR_PAYMENT,
    status: OrderStatus.SUCCESS,
  },
  {
    id: 2,
    amount: 200,
    isPaid: true,
    method: PaymentMethod.CREDIT_TERM,
    status: OrderStatus.PENDING,
  },
  {
    id: 3,
    amount: 200,
    isPaid: true,
    paymentDate: new Date(),
    method: PaymentMethod.BANK_TRANSFER,
    status: OrderStatus.SUCCESS,
  },
  {
    id: 4,
    amount: 200,
    isPaid: true,
    paymentDate: new Date(),
    method: PaymentMethod.BANK_TRANSFER,
    status: OrderStatus.CANCEL,
  },
  {
    id: 5,
    amount: 500,
    isPaid: true,
    method: PaymentMethod.CREDIT_TERM,
    status: OrderStatus.SUCCESS,
  },
];
