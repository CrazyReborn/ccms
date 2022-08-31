import mongoose, { Date, Document } from 'mongoose';
import { Organization } from './organization.schema';
import { User } from './user.schema';
export declare type TaskDoc = Task & Document;
export declare class Task {
    assignedTo: User;
    description: string;
    name: string;
    date: Date;
    location: number[];
    organization: Organization;
    done: boolean;
}
export declare const TaskSchema: mongoose.Schema<Task, mongoose.Model<Task, any, any, any, any>, {}, {}, {}, {}, "type", Task>;
