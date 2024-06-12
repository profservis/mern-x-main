
/* // routes/orderRoutes.js
import express from 'express';
import { createOrder, updateOrder, getOrder } from '../controllers/orderController.js';
import { authenticateJWT, isCustomer, isProvider } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/orders', authenticateJWT, isCustomer, isProvider, createOrder); // добавлено isProvider
router.put('/orders/:id', authenticateJWT, isProvider, updateOrder); // добавлено isProvider
router.get('/orders/:id', authenticateJWT, isProvider, getOrder); // добавлено isProvider

export default router; */

// routes/orderRoutes.js
import express from 'express';
import { createOrder, updateOrder, getOrder } from '../controllers/orderController.js';
import { authenticateJWT, isCustomer, isProvider } from '../middlewares/authMiddleware.js'; // исправлен путь на middlewares

const router = express.Router();

router.post('/orders', authenticateJWT, isCustomer, isProvider, createOrder); // добавлено isProvider
router.put('/orders/:id', authenticateJWT, isProvider, updateOrder); // добавлено isProvider
router.get('/orders/:id', authenticateJWT, isProvider, getOrder); // добавлено isProvider

export default router;
