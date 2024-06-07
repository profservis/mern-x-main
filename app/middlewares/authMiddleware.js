import { DecodeToken } from "../utility/tokenUtility.js";

const authMiddleware = (req, res, next) => {
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
};

export default authMiddleware;



