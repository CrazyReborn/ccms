import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Class, Sex } from '../schemas/cat.schema';

export class CreateCatDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsNotEmpty()
  sex: Sex;

  @IsNotEmpty()
  @IsBoolean()
  sterilized: boolean;

  @IsNotEmpty()
  @IsBoolean()
  vaccinated: boolean;

  @IsNotEmpty()
  class: Class;

  @IsNotEmpty()
  @IsString({ each: true })
  features: string[];

  parents: any[];

  descendants: any[];
}
