
// config.js
export const MONGODB_CONNECTION = process.env.MONGODB_CONNECTION ||"mongodb://localhost:27017/admin";
export const JWT_SECRET = process.env.JWT_SECRET || "your-random-secret-key";
export const JWT_EXPIRATION_TIME = process.env.JWT_EXPIRATION_TIME || 60*60*24*30; // 30 дней
export const EMAIL_HOST = process.env.EMAIL_HOST || "";
export const EMAIL_PORT = process.env.EMAIL_PORT || "";
export const EMAIL_USER = process.env.EMAIL_USER || "";
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || "";
export const MAX_JSON_SIZE = process.env.MAX_JSON_SIZE || "50mb";
export const URL_ENCODED = process.env.URL_ENCODED || true;
export const REQUEST_LIMIT_TIME = process.env.REQUEST_LIMIT_TIME || 15 * 60 * 1000; // 15 минут
export const REQUEST_LIMIT_NUMBER = process.env.REQUEST_LIMIT_NUMBER || 3000; // 3000 запросов за 15 минут
export const WEB_CACHE = process.env.WEB_CACHE || false;
export const PORT = process.env.PORT || 3000;

