import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, Document } from 'mongoose';
import { User } from './user.schema';

export type TaskDoc = Task & Document;

@Schema()
export class Task {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User })
  assignedTo: User;

  @Prop()
  date: Date;

  @Prop()
  location: number[];

  @Prop({ default: false })
  done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);