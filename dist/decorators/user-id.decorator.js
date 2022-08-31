"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProperty = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
exports.UserProperty = (0, common_1.createParamDecorator)((data, ctx) => {
    const jwtService = new jwt_1.JwtService({ secret: process.env.JWT_SECRET });
    const request = ctx.switchToHttp().getRequest();
    let token = request.headers.authorization.toString();
    token = token.replace('Bearer ', '');
    const decoded = jwtService.decode(token);
    return data ? decoded[data] : decoded;
});
//# sourceMappingURL=user-id.decorator.js.map