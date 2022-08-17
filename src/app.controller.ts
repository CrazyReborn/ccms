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

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req, @Response() res) {
    const { access_token } = this.authService.login(req.user);
    return res.cookie('accessToken', access_token);
  }

  @Roles([Role.OrganizationLeader, Role.Caretaker])
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  get(@UserProperty('id') id: string) {
    return id;
  }
}
