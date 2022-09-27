import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, Document } from 'mongoose';
import { Task } from './task.schema';
import { User } from './user.schema';

export type ReportDoc = Report & Document;

@Schema()
export class Report {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
    default: undefined,
  })
  task: Task;

  @Prop()
  text: string;

  @Prop()
  date: Date;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: undefined,
  })
  filledBy: User;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
