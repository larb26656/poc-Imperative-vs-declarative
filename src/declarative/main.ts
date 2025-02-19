import { menu } from "./menu";
import { orders } from "../data";

export function run() {
  const dataList = [];

  for (const order of orders) {
    const filterMenu = menu
      .filter((e) => e.condition(order))
      .map((e) => e.label);
    dataList.push({
      ...order,
      menu: filterMenu,
    });
  }

  console.table(dataList);
}
