import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, Document } from 'mongoose';
import { Organization } from './organization.schema';
import { User } from './user.schema';

export type TaskDoc = Task & Document;

@Schema()
export class Task {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: undefined,
  })
  assignedTo: User;

  @Prop()
  description: string;

  @Prop()
  name: string;

  @Prop({ type: Date })
  date: Date;

  @Prop()
  location: number[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Organization' })
  organization: Organization;

  @Prop({ default: false })
  done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
