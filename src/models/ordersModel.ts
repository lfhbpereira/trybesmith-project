import connection from './connection';

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

export default { getAllOrders };
