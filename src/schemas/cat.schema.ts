import { Prop, Schema } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type CatDoc = Cat & Document;

enum Sex {
  Male,
  Female,
}

enum Class {
  Feral,
  Stay,
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
}
