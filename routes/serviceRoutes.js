// routes/serviceRoutes.js

import express from 'express';
import { createService, getServices } from '../app/controllers/serviceController.js';
import { authenticateJWT, isProvider } from '../app/middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authenticateJWT, isProvider, createService);
router.get('/', getServices);

export default router;

