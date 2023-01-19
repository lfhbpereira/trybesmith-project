import { ResultSetHeader } from 'mysql2';

import { Product } from '../interfaces';
import connection from './connection';

async function getAllProducts() {
  const [products] = await connection.execute(
    'SELECT * FROM Trybesmith.products',
  );

  return products;
}

async function createProduct(product: Product) {
  const { name, amount } = product;

  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  return { id: insertId, ...product };
}

async function updateProduct(product: Partial<Product>) {
  const { orderId, id } = product;

  const result = await connection.execute(
    'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
    [orderId, id],
  );

  return result;
}

export { getAllProducts, createProduct, updateProduct };
