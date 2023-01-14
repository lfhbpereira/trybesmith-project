import { ResultSetHeader } from 'mysql2';

import { Product } from '../interfaces';
import connection from './connection';

export async function getAllProducts() {
  const [products] = await connection.execute(
    'SELECT * FROM Trybesmith.products',
  );

  return products;
}

export async function createProduct(product: Product) {
  const { name, amount } = product;

  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  return { id: insertId, ...product };
}
