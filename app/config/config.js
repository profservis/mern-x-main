// config.js
/* export const MONGODB_CONNECTION = "mongodb+srv://mrrabbil:mernx123@cluster0.rtpbcy6.mongodb.net/app_todo?retryWrites=true&w=majority";

export const JWT_SECRET = "5EC7CEFA1BE7C9354A639369A2AA8";
export const JWT_EXPIRATION_TIME = 60*60*24*30; // 30 Days

export const EMAIL_HOST = "";
export const EMAIL_PORT = "";
export const EMAIL_USER = "";
export const EMAIL_PASSWORD = "";

export const MAX_JSON_SIZE = "50mb";
export const URL_ENCODED = true;

export const REQUEST_LIMIT_TIME = 15 * 60 * 1000; // 15 Min
export const REQUEST_LIMIT_NUMBER = 3000; // Per 15 Min 3000 Request Allowed

export const WEB_CACHE = false;

export const PORT = 3000; */

// config/config.js
export const MONGODB_CONNECTION = process.env.MONGODB_CONNECTION || "mongodb+srv://mrrabbil:mernx123@cluster0.mongodb.net/app_todo?retryWrites=true&w=majority";
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

