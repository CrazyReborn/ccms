import { IsNumber, IsOptional, IsString } from 'class-validator';
import { User } from '../schemas/user.schema';

export class UpdateColonyDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  size: number;

  @IsOptional()
  caretakers: User[];

  @IsOptional()
  @IsNumber({}, { each: true })
  location: number[]; //this maybe should have a different type

  @IsOptional()
  @IsNumber({}, { each: true })
  radius: number;
}
