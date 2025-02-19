import { orders } from "../data";
import { getMenuForOrder } from "./menu";

export function run() {
  const dataList = [];

  for (const order of orders) {
    dataList.push({
      ...order,
      menu: getMenuForOrder(order),
    });
  }

  console.table(dataList);
}
