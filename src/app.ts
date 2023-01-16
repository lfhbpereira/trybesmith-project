import express from 'express';

import productsController from './controllers/productsController';
import usersController from './controllers/usersController';
import ordersController from './controllers/ordersController';
import validateLogin from './middlewares/validateLogin';

const app = express();

app.use(express.json());

app.get('/products', productsController.getAllProducts);
app.post('/products', productsController.createProduct);
app.post('/users', usersController.createUser);
app.get('/orders', ordersController.getAllOrders);
app.post('/login', validateLogin, usersController.userLogin);

export default app;
