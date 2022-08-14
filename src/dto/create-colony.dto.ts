import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { User } from '../schemas/user.schema';

export class CreateColonyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  size: number;

  @IsOptional()
  caretakers: string[];

  @IsNotEmpty()
  @IsNumber({}, { each: true })
  location: number[]; //this maybe should have a different type

  @IsNotEmpty()
  @IsNumber({}, { each: true })
  radius: number;
}
