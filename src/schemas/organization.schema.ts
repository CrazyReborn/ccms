import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Doc } from 'prettier';
import { User } from './user.schema';

export type OrganizationDoc = Organization & Doc;

@Schema()
export class Organization {
  @Prop()
  name: string;

  @Prop()
  owner: User;

  @Prop()
  members: User[];
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
