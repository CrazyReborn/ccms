import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDto } from '../dto/create-tasks.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { Task } from '../schemas/task.schema';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name)
    private readonly taskModel: Model<Task>,
  ) {}

  async find(orgId: string) {
    const tasks = await this.taskModel
      .find({ organization: orgId })
      .populate('assignedTo')
      .exec();
    return tasks;
  }

  async findOne(id: string) {
    const task = await this.taskModel.findById(id).populate('assignedTo');
    if (!task) {
      throw new NotFoundException('Task with this id was not found');
    }
    return task;
  }

  create(createTaskDto: CreateTaskDto, orgId: string) {
    const fullTaskDto = {
      done: false,
      organization: orgId,
      ...createTaskDto,
    };
    const task = new this.taskModel(fullTaskDto);
    return task.save();
  }

  async update(updateTaskDto: UpdateTaskDto, id: string) {
    const existingTask = await this.taskModel.findByIdAndUpdate(
      { _id: id },
      { $set: updateTaskDto },
      { new: true },
    );

    if (!existingTask) {
      throw new NotFoundException('Task with this id was not found');
    }

    return existingTask;
  }

  async remove(id: string) {
    const task = await this.findOne(id);
    if (!task) {
      throw new NotFoundException('Task with this id was not found');
    }

    return await task.remove();
  }
}
