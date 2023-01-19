import express from 'express';

import ordersController from './controllers/ordersController';
import productsController from './controllers/productsController';
import usersController from './controllers/usersController';
import validateProductAmount from './middlewares/validateProductAmount';
import validateProductName from './middlewares/validateProductName';
import validateProductOrder from './middlewares/validateProductOrder';
import validateUserLevel from './middlewares/validateUserLevel';
import validateUserLogin from './middlewares/validateUserLogin';
import validateUserName from './middlewares/validateUserName';
import validateUserPassword from './middlewares/validateUserPassword';
import validateUserToken from './middlewares/validateUserToken';
import validateUserVocation from './middlewares/validateUserVocation';

const app = express();

app.use(express.json());

app.post('/login', validateUserLogin, usersController.userLogin);

app.get('/orders', ordersController.getAllOrders);
app.post('/orders', validateUserToken, validateProductOrder, ordersController.createOrder);

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

export default app;
