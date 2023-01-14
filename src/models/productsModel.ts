import { ResultSetHeader } from 'mysql2';

import { Product } from '../interfaces';
import connection from './connection';

export default async function createProduct(product: Product) {
  const { name, amount } = product;

  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  return { id: insertId, ...product };
}
