// routes/orderRoutes.js
import express from 'express';
import { createOrder, updateOrder, getOrder } from '../controllers/orderController.js';
import { authenticateJWT, isCustomer, isProvider } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/orders', authenticateJWT, isCustomer, createOrder);
router.put('/orders/:id', authenticateJWT, updateOrder);
router.get('/orders/:id', authenticateJWT, getOrder);

export default router;
