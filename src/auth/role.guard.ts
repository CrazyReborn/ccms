import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { ROLES_KEY } from '../decorators/user-roles.decorator';
import { Role } from '../schemas/user.schema';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRole = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRole) return true;

    const jwtService = new JwtService({ secret: process.env.JWT_SECRET });
    const request = context.switchToHttp().getRequest();
    let token = request.headers.authorization.toString();
    token = token.replace('Bearer ', '');
    if (token == 'null') return false;
    const decoded = jwtService.decode(token);
    return requiredRole.some((role) => role == decoded['role']);
  }
}
