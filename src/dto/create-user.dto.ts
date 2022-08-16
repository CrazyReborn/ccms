import {
  Equals,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  isString,
  IsString,
} from 'class-validator';
import { Role } from '../schemas/user.schema';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  confirmPassword: string;

  @IsEnum(Role)
  @IsNotEmpty()
  role: Role;

  @IsString()
  @IsNotEmpty()
  organization: any;
}
