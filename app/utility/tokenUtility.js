/* import jwt from 'jsonwebtoken';
import {JWT_EXPIRATION_TIME, JWT_SECRET} from "../config/config.js";

export const EncodeToken = (email, user_id) => {
    const KEY = JWT_SECRET;
    const EXPIRE = { expiresIn: JWT_EXPIRATION_TIME };
    const PAYLOAD = { email: email, user_id: user_id };
    return jwt.sign(PAYLOAD,KEY,EXPIRE);
};

export const DecodeToken = (token) => {
    try {
        const KEY = process.env.JWT_SECRET;// Используйте тот же секретный ключ
        return jwt.verify(token,KEY);
    } catch (error) {
        return null;
    }
};
 */


/* // app/utility/tokenUtility.js
import jwt from 'jsonwebtoken';
import { JWT_EXPIRATION_TIME, JWT_SECRET } from "../config/config.js";

export const EncodeToken = (email, user_id) => {
    const KEY = JWT_SECRET;
    const EXPIRE = { expiresIn: JWT_EXPIRATION_TIME };
    const PAYLOAD = { email: email, user_id: user_id };
    return jwt.sign(PAYLOAD, KEY, EXPIRE);
};

export const DecodeToken = (token) => {
    try {
        const KEY = JWT_SECRET;
        return jwt.verify(token, KEY);
    } catch (error) {
        return null;
    }
}; */

//utility\tokenUtility.js
import jwt from 'jsonwebtoken';
import { JWT_EXPIRATION_TIME, JWT_SECRET } from "../config/config.js";

export const EncodeToken = (email, user_id, role) => {  // добавлен параметр role
    const KEY = JWT_SECRET;
    const EXPIRE = { expiresIn: JWT_EXPIRATION_TIME };
    const PAYLOAD = { email: email, user_id: user_id, role: role };  // добавлена роль в полезную нагрузку
    return jwt.sign(PAYLOAD, KEY, EXPIRE);
};

export const DecodeToken = (token) => {
    try {
        const KEY = JWT_SECRET;
        return jwt.verify(token, KEY);
    } catch (error) {
        return null;
    }
};

