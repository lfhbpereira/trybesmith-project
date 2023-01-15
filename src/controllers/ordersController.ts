import { Request, Response } from 'express';

import * as ordersService from '../services/ordersService';

export default async function getAllOrders(_req: Request, res: Response) {
  const orders = await ordersService.default();

  res.status(200).json(orders);
}
