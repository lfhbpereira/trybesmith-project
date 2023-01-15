import * as ordersModel from '../models/ordersModel';

export default async function getAllOrders() {
  const orders = await ordersModel.default();

  return orders;
}
