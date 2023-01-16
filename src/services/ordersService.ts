import ordersModel from '../models/ordersModel';

async function getAllOrders() {
  const orders = await ordersModel.getAllOrders();

  return orders;
}

export default { getAllOrders };
