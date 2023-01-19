import express from 'express';

import productsController from './controllers/productsController';
import usersController from './controllers/usersController';
import ordersController from './controllers/ordersController';
import validateUserLogin from './middlewares/validateUserLogin';
import validateProductName from './middlewares/validateProductName';
import validateProductAmount from './middlewares/validateProductAmount';
import validateUserName from './middlewares/validateUserName';
import validateUserVocation from './middlewares/validateUserVocation';
import validateUserLevel from './middlewares/validateUserLevel';
import validateUserPassword from './middlewares/validateUserPassword';
import validateUserToken from './middlewares/validateUserToken';
import validateProductOrder from './middlewares/validateProductOrder';

const app = express();

app.use(express.json());

app.get('/products', productsController.getAllProducts);
app.post('/products', validateProductName, validateProductAmount, productsController.createProduct);
app.post(
  '/users',
  validateUserName,
  validateUserVocation,
  validateUserLevel,
  validateUserPassword,
  usersController.createUser,
);
app.get('/orders', ordersController.getAllOrders);
app.post('/orders', validateUserToken, validateProductOrder, ordersController.createOrder);
app.post('/login', validateUserLogin, usersController.userLogin);

export default app;
