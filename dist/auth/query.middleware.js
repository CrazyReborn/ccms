"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryMiddleware = void 0;
const jwt_1 = require("@nestjs/jwt");
function QueryMiddleware(req, res, next) {
    const jwtService = new jwt_1.JwtService({ secret: process.env.JWT_SECRET });
    const token = req.headers.authorization.replace('Bearer ', '');
    const user = jwtService.decode(token);
    console.log(user);
    req.user = user;
    next();
}
exports.QueryMiddleware = QueryMiddleware;
//# sourceMappingURL=query.middleware.js.map