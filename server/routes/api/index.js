import { Router } from "express";
import products from 'routes/products'
let router = Router();

router.use('/products', products);

export default router;