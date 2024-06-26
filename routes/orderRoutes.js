
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
import { createOrder, updateOrder, getOrder } from '../app/controllers/orderController.js';
import { authenticateJWT, isCustomer, isProvider } from '../app/middlewares/authMiddleware.js'; // исправлен путь на middlewares

const router = express.Router();

/* router.post('/orders', authenticateJWT, isCustomer, isProvider, createOrder); // добавлено isProvider
router.put('/orders/:id', authenticateJWT, isProvider, updateOrder); // добавлено isProvider
router.get('/orders/:id', authenticateJWT, isProvider, getOrder); // добавлено  */

router.post('/orders', authenticateJWT, isCustomer, createOrder); // убрано isProvider, так как заказ должен создавать клиент
router.put('/orders/:id', authenticateJWT, isProvider, updateOrder); 
router.get('/orders/:id', authenticateJWT, getOrder); // убрано isProvider, чтобы клиенты тоже могли получить свои заказы

export default router;
