import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export const UserProperty = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const jwtService = new JwtService({ secret: process.env.JWT_SECRET });
    const request = ctx.switchToHttp().getRequest();
    let token = request.headers.authorization.toString();
    token = token.replace('Bearer ', '');
    const decoded = jwtService.decode(token);
    return data ? decoded[data] : decoded;
  },
);
