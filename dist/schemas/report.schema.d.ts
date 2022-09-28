import mongoose, { Date, Document } from 'mongoose';
import { Organization } from './organization.schema';
import { Task } from './task.schema';
import { User } from './user.schema';
export declare type ReportDoc = Report & Document;
export declare class Report {
    task: Task;
    organization: Organization;
    text: string;
    date: Date;
    filledBy: User;
}
export declare const ReportSchema: mongoose.Schema<Report, mongoose.Model<Report, any, any, any, any>, {}, {}, {}, {}, "type", Report>;
