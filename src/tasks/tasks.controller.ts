import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserProperty } from '../decorators/user-property.decorator';
import { Roles } from '../decorators/user-roles.decorator';
import { Role } from '../schemas/user.schema';
import { TasksService } from './tasks.service';

@UseGuards(JwtAuthGuard)
@Roles([Role.OrganizationLeader])
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  find(@UserProperty('organization') org: string) {
    return this.tasksService.find(org);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }

  @Patch(':id')
  update(@Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(updateTaskDto);
  }
}
