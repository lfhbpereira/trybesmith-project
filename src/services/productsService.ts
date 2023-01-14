import { Product } from '../interfaces';
import * as productsModel from '../models/productsModel';

export default async function createProduct(product: Product) {
  const newProduct = await productsModel.default(product);

  return newProduct;
}
