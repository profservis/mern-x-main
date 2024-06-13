import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { JWT_SECRET, JWT_EXPIRATION_TIME } from '../config/config.js';

// Регистрация
export const register = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // Проверка на наличие пользователя
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Хеширование пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создание пользователя
    const newUser = new User({ username, password: hashedPassword, role });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

// Авторизация
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Проверка пользователя
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Проверка пароля
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Создание токена
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRATION_TIME });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};

// Профиль пользователя
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user profile', error: error.message });
  }
};

// Обновление профиля пользователя
export const updateUserProfile = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findById(req.user.id);

    if (user) {
      user.username = username || user.username;

      if (password) {
        user.password = await bcrypt.hash(password, 10);
      }

      const updatedUser = await user.save();
      res.json({ message: 'User updated successfully', user: updatedUser });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating user profile', error: error.message });
  }
};
