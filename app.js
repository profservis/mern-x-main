
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

import { fileURLToPath } from 'url';
import { dirname } from 'path';

import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import hpp from 'hpp';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { MAX_JSON_SIZE, MONGODB_CONNECTION, PORT, REQUEST_LIMIT_NUMBER, REQUEST_LIMIT_TIME, URL_ENCODED, WEB_CACHE } from './app/config/config.js';
import serviceRoutes from './routes/serviceRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import router from './routes/api.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware setup
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(cookieParser());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODED }));

// Rate limiting
const limiter = rateLimit({ windowMs: REQUEST_LIMIT_TIME, max: REQUEST_LIMIT_NUMBER });
app.use(limiter);

// Web cache validation
app.set('etag', WEB_CACHE);

// MongoDB connection
mongoose.connect(MONGODB_CONNECTION, { autoIndex: true })
    .then(() => {
        console.log('Database Connected');
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });

// API routes
app.use('/api', router);
app.use('/api/users', userRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);

// Serve static assets for React front end
app.use(express.static('dist'));

// Serve React front end for all routes not handled by the API
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'app.html'));
});

app.listen(PORT, () => {
    console.log(`MERN-X Server Running on PORT ${PORT}`);
});



