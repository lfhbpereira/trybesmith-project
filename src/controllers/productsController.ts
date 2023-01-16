import { Request, Response } from 'express';

import { Product } from '../interfaces';
import * as productsService from '../services/productsService';

async function getAllProducts(_req: Request, res: Response) {
  const products = await productsService.getAllProducts();

  res.status(200).json(products);
}

async function createProduct(req: Request, res: Response) {
  const product = req.body as Product;

  const newProduct = await productsService.createProduct(product);

  res.status(201).json(newProduct);
}

export default { getAllProducts, createProduct };
