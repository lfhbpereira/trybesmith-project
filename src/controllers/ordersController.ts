import { Request, Response } from 'express';

import ordersService from '../services/ordersService';

async function getAllOrders(_req: Request, res: Response) {
  const orders = await ordersService.getAllOrders();

  return res.status(200).json(orders);
}

export default { getAllOrders };
