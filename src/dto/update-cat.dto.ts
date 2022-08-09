import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { Class, Sex } from '../schemas/cat.schema';

export class UpdateCatDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  age: number;

  @IsOptional()
  sex: Sex;

  @IsOptional()
  @IsBoolean()
  sterilized: boolean;

  @IsOptional()
  @IsBoolean()
  vaccinated: boolean;

  @IsOptional()
  class: Class;

  @IsOptional()
  @IsString({ each: true })
  features: string[];

  parents: any[];

  descendants: any[];
}
