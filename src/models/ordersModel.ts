import { ResultSetHeader } from 'mysql2';

import connection from './connection';
import { Order } from '../interfaces';

async function getAllOrders() {
  const [orders] = await connection.execute(
    `SELECT o.id AS id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.orders AS o
    INNER JOIN Trybesmith.products AS p
    ON p.order_id = o.id
    GROUP BY o.id`,
  );

  return orders;
}

async function createOrder(order: Order) {
  const { user } = order;

  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
    [user.id],
  );

  return insertId;
}

export { getAllOrders, createOrder };
