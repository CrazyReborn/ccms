"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const task_schema_1 = require("../schemas/task.schema");
let TasksService = class TasksService {
    constructor(taskModel) {
        this.taskModel = taskModel;
    }
    async findByOrg(orgId) {
        const tasks = await this.taskModel
            .find({ organization: orgId })
            .populate('assignedTo')
            .exec();
        return tasks;
    }
    async findByUser(userId) {
        const tasks = await this.taskModel
            .find({ assignedTo: userId })
            .populate('assignedTo')
            .exec();
        return tasks;
    }
    async findOne(id) {
        const task = await this.taskModel.findById(id).populate('assignedTo');
        if (!task) {
            throw new common_1.NotFoundException('Task with this id was not found');
        }
        return task;
    }
    create(createTaskDto, orgId) {
        const fullTaskDto = Object.assign({ done: false, organization: orgId }, createTaskDto);
        const task = new this.taskModel(fullTaskDto);
        return task.save();
    }
    async update(updateTaskDto, id) {
        const existingTask = await this.taskModel.findByIdAndUpdate({ _id: id }, { $set: updateTaskDto }, { new: true });
        if (!existingTask) {
            throw new common_1.NotFoundException('Task with this id was not found');
        }
        return existingTask;
    }
    async remove(id) {
        const task = await this.findOne(id);
        if (!task) {
            throw new common_1.NotFoundException('Task with this id was not found');
        }
        return await task.remove();
    }
};
TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(task_schema_1.Task.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map