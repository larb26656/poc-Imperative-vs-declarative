import { Order } from "../model";
import { Menu } from "./model";
import {
  canDelete,
  canPrintReceipt,
  canViewQuotation,
  isHaveDept,
} from "./order";

export function getMenuForOrder(order: Order): Menu[] {
  const menus: Menu[] = [];

  if (canPrintReceipt(order)) {
    menus.push({ label: "printReceipt" });
  }

  if (canViewQuotation(order)) {
    menus.push({ label: "viewQuatation" });
  }

  if (canDelete(order)) {
    menus.push({ label: "delete" });
  }

  if (isHaveDept(order)) {
    menus.push({ label: "trackDept" });
  }

  return menus;
}
