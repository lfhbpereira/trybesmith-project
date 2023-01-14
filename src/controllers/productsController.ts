import { Request, Response } from 'express';

import { Product } from '../interfaces';
import * as productsService from '../services/productsService';

export default async function createProduct(req: Request, res: Response) {
  const product = req.body as Product;

  const newProduct = await productsService.default(product);

  res.status(201).json(newProduct);
}
