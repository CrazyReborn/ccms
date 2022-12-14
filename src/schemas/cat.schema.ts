import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Colony } from './colony.schema';

export type CatDoc = Cat & Document;

export enum Sex {
  Male,
  Female,
}

export enum Class {
  Feral,
  Stray,
}

@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop({ type: String, enum: Sex })
  sex: Sex;

  @Prop()
  sterilized: boolean;

  @Prop()
  vaccinated: boolean;

  @Prop({ type: String, enum: Class })
  class: Class;

  @Prop()
  features: string[];

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Cat' }])
  parents: Cat[];

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Cat' }])
  descendants: Cat[];

  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Colony' }])
  colony: Colony;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
