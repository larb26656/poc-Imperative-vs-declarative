import { Order } from "../model";
import { Menu } from "./model";
import {
  canDelete,
  canPrintReceipt,
  canViewQuatation,
  hasOutstandingDebt,
} from "./order";

export const menu: Menu<Order>[] = [
  {
    label: "printReceipt",
    condition: canPrintReceipt,
  },
  {
    label: "viewQuatation",
    condition: canViewQuatation,
  },
  {
    label: "delete",
    condition: canDelete,
  },
  {
    label: "trackDept",
    condition: hasOutstandingDebt,
  },
];
