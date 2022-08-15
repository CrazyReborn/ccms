import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Colony } from './colony.schema';

export type UserDoc = User & Document;

export enum Role {
  OrganizationLeader,
  Caretaker,
  Volunteer,
  Admin,
}

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Colony' }])
  colonies: Colony[];

  @Prop({ type: String, enum: Role })
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
