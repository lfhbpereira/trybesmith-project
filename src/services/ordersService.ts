import { Order } from '../interfaces';
import * as ordersModel from '../models/ordersModel';

async function getAllOrders() {
  const orders = await ordersModel.getAllOrders();

  return orders;
}

async function createOrder(order: Order) {
  const orderId = await ordersModel.createOrder(order);

  return orderId;
}

export { getAllOrders, createOrder };
