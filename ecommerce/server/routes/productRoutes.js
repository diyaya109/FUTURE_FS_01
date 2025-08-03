// server/routes/productRoutes.js

import express from 'express';
import products from '../data/products.js';
const router = express.Router();
import { getProducts, getProductById } from '../controllers/productController.js';

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);
router.get('/', (req, res) => {
  res.json(products);
});


export default router;
