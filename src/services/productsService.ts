import { Product } from '../interfaces';
import * as productsModel from '../models/productsModel';

async function getAllProducts() {
  const products = await productsModel.getAllProducts();

  return products;
}

async function createProduct(product: Product) {
  const newProduct = await productsModel.createProduct(product);

  return newProduct;
}

async function updateProduct(orderId: number, productsIds: number[]) {
  const promises = productsIds.map((id) => productsModel.updateProduct({ orderId, id }));

  await Promise.all(promises);
}

export { getAllProducts, createProduct, updateProduct };
