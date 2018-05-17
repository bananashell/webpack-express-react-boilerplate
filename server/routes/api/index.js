import { Router } from "express";
import products from '../products'
let router = Router();

router.use('/products', products);

export default router;