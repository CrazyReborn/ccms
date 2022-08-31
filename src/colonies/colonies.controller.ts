import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserProperty } from '../decorators/user-property.decorator';
import { Roles } from '../decorators/user-roles.decorator';
import { CreateColonyDto } from '../dto/create-colony.dto';
import { UpdateColonyDto } from '../dto/update-colony.dto';
import { Role } from '../schemas/user.schema';
import { ColoniesService } from './colonies.service';

@UseGuards(JwtAuthGuard)
@Roles([Role.OrganizationLeader, Role.Caretaker, Role.Admin])
@Controller('colonies')
export class ColoniesController {
  constructor(private readonly coloniesService: ColoniesService) {}

  @Get()
  find(
    @UserProperty('id') userId: string,
    @UserProperty('role') role: number,
    @UserProperty('organization') orgId: string,
  ) {
    if (role === 0 || role === 4) {
      return this.coloniesService.findByOrg(orgId);
    }
    return this.coloniesService.find(userId);
  }

  @Get(':id')
  findOne(@Param() id: string) {
    return this.coloniesService.findOne(id);
  }

  @Post()
  create(
    @UserProperty('organization') orgId: string,
    @Body() createColonyDto: CreateColonyDto,
  ) {
    return this.coloniesService.create(createColonyDto, orgId);
  }

  @Patch(':id')
  update(@Param() id: string, @Body() updateColonyDto: UpdateColonyDto) {
    return this.coloniesService.update(id, updateColonyDto);
  }

  @Delete()
  delete(@Param() id: string) {
    return this.coloniesService.delete(id);
  }
}
