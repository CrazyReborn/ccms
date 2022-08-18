import {
  Request,
  Controller,
  Get,
  Post,
  UseGuards,
  Response,
} from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { UserProperty } from './decorators/user-property.decorator';
import { Roles } from './decorators/user-roles.decorator';
import { Role } from './schemas/user.schema';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @Get('test-route')
  testroute() {
    return 'this is a test';
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Roles([Role.OrganizationLeader, Role.Caretaker])
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  get(@UserProperty('id') id: string) {
    return id;
  }
}
