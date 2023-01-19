import * as ordersModel from '../models/ordersModel';
import { Order } from '../interfaces';

async function getAllOrders() {
  const orders = await ordersModel.getAllOrders();

  return orders;
}

async function createOrder(order: Order) {
  const orderId = await ordersModel.createOrder(order);

  return orderId;
}

export { getAllOrders, createOrder };
