import express from 'express';

import productsRouter from './routers/productsRouter';
import usersRouter from './routers/usersRouter';
import ordersRouter from './routers/ordersRouter';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);

export default app;
