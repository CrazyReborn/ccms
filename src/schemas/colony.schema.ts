import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Cat } from './cat.schema';
import { Organization } from './organization.schema';
import { User } from './user.schema';

export type ColonyDoc = Colony & Document;

@Schema()
export class Colony {
  @Prop()
  name: string;

  @Prop()
  size: number;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }])
  caretakers: User[];

  @Prop()
  location: number[]; //this maybe should have a different type

  @Prop()
  radius: number;

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Cat' }])
  registeredCats: Cat[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Organization' })
  organization: Organization;
}

export const ColonySchema = SchemaFactory.createForClass(Colony);
