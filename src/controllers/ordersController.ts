import { Request, Response } from 'express';

import * as ordersService from '../services/ordersService';
import * as productsService from '../services/productsService';

async function getAllOrders(_req: Request, res: Response) {
  const orders = await ordersService.getAllOrders();

  return res.status(200).json(orders);
}

const createOrder = async (req: Request, res: Response) => {
  const order = req.body;
  const { user: { id: userId }, productsIds } = order;

  const orderId = await ordersService.createOrder(order);

  await productsService.updateProduct(orderId, productsIds);

  return res.status(201).json({ userId, productsIds });
};

export default { getAllOrders, createOrder };
