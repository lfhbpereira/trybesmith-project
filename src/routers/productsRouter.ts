import express from 'express';

import * as productsController from '../controllers/productsController';

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.post('/', productsController.createProduct);

export default router;
