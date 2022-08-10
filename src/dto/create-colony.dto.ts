import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { User } from '../schemas/user.schema';

export class CreateColonyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  size: number;

  @IsNotEmpty()
  caretakers: User[];

  @IsNotEmpty()
  @IsNumber({}, { each: true })
  location: number[]; //this maybe should have a different type

  @IsNotEmpty()
  @IsNumber({}, { each: true })
  radius: number;
}
