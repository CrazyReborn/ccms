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
import { CreateTaskDto } from '../dto/create-tasks.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { Role } from '../schemas/user.schema';
import { TasksService } from './tasks.service';

@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  find(
    @UserProperty('role') role: number,
    @UserProperty('organization') orgId: string,
    @UserProperty('id') userId: string,
  ) {
    if (role === 0) return this.tasksService.findByOrg(orgId);
    if (role === 1) return this.tasksService.findByUser(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Post()
  create(
    @UserProperty('organization') orgId: string,
    @Body() createTaskDto: CreateTaskDto,
  ) {
    return this.tasksService.create(createTaskDto, orgId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(updateTaskDto, id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
