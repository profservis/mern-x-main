// routes/userRoutes.js
import express from 'express';
import { registerUser, loginUser, getUserProfile, updateUserProfile } from '../controllers/userController.js';
import { authenticateJWT } from '../middleware/authMiddleware.js';

const router = express.Router();

// Routes
router.post('/register', registerUser); // Зарегистрируйте нового пользователя
router.post('/login', loginUser); // Войти существующего пользователя
router.get('/profile', authenticateJWT, getUserProfile); // Получить профиль пользователя
router.put('/profile', authenticateJWT, updateUserProfile); // Обновить профиль пользователя

export default router;
