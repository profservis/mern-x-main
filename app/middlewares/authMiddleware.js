/* import { DecodeToken } from "../utility/tokenUtility.js";

export default (req, res, next) => {
    // Получаем токен из заголовков
    let token = req.headers['token'];

    // Декодируем токен
    let decoded = DecodeToken(token);

    // Проверка и добавление данных в заголовки запроса
    if (decoded === null) {
        return res.status(401).json({ status: "fail", message: "Unauthorized" });
    } else {
        // Используем правильные свойства объекта, возвращаемого DecodeToken
        let email = decoded.email;
        let user_id = decoded.user_id;
        req.headers.email = email;
        req.headers.user_id = user_id;
        next();
    }
}; */

//Создадим промежуточное ПО для проверки JWT токенов и роли пользователя.

//middlewares\authMiddleware.js
// middlewares/authMiddleware.js
import { DecodeToken } from "../utility/tokenUtility.js";

export const authenticateJWT = (req, res, next) => {
    // Получаем токен из заголовков
    let token = req.headers['token'];

    // Декодируем токен
    let decoded = DecodeToken(token);

    // Проверка и добавление данных в заголовки запроса
    if (decoded === null) {
        return res.status(401).json({ status: "fail", message: "Unauthorized" });
    } else {
        // Используем правильные свойства объекта, возвращаемого DecodeToken
        let email = decoded.email;
        let user_id = decoded.user_id;
        let role = decoded.role; // добавляем роль
        req.headers.email = email;
        req.headers.user_id = user_id;
        req.headers.role = role; // добавляем роль в заголовки
        next();
    }
};

export const isProvider = (req, res, next) => {
    // логика проверки, является ли пользователь поставщиком
    if (req.headers.role === 'provider') {
        return next();
    } else {
        return res.status(403).json({ message: 'Access denied: Providers only.' });
    }
};

export const isCustomer = (req, res, next) => {
    // логика проверки, является ли пользователь клиентом
    if (req.headers.role === 'customer') {
        return next();
    } else {
        return res.status(403).json({ message: 'Access denied: Customers only.' });
    }
};






