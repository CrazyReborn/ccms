/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateTaskDto } from '../dto/create-tasks.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    find(role: number, orgId: string, userId: string): Promise<Omit<import("mongoose").Document<unknown, any, import("../schemas/task.schema").Task> & import("../schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, any, import("../schemas/task.schema").Task> & import("../schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(orgId: string, createTaskDto: CreateTaskDto): Promise<import("mongoose").Document<unknown, any, import("../schemas/task.schema").Task> & import("../schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<import("mongoose").Document<unknown, any, import("../schemas/task.schema").Task> & import("../schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, any, import("../schemas/task.schema").Task> & import("../schemas/task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
