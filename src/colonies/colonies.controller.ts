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

@Roles([Role.Admin, Role.Caretaker, Role.OrganizationLeader])
@UseGuards(JwtAuthGuard)
@Controller('colonies')
export class ColoniesController {
  constructor(private readonly coloniesService: ColoniesService) {}

  @Get()
  find(@UserProperty('id') userId: string) {
    return this.coloniesService.find(userId);
  }

  @Get(':id')
  findOne(@Param() id: string) {
    return this.coloniesService.findOne(id);
  }

  @Post()
  create(
    @UserProperty('id') userId: string,
    @Body() createColonyDto: CreateColonyDto,
  ) {
    return this.coloniesService.create(createColonyDto, userId);
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
