// routes/serviceRoutes.js
import express from 'express';
import { createService, getServices } from '../controllers/serviceController.js';
import { authenticateJWT, isProvider } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authenticateJWT, isProvider, createService);
router.get('/', getServices);

export default router;
