import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Doc } from 'prettier';
import { User } from './user.schema';

export type OrganizationDoc = Organization & Doc;

@Schema()
export class Organization {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  owner: User;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }])
  members: User[];
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
