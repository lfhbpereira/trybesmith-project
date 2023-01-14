import { Product } from '../interfaces';
import * as productsModel from '../models/productsModel';

export async function getAllProducts() {
  const products = await productsModel.getAllProducts();

  return products;
}

export async function createProduct(product: Product) {
  const newProduct = await productsModel.createProduct(product);

  return newProduct;
}
