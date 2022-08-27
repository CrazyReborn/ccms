import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    description: 'First name',
    example: 'John',
  })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    description: 'Last name',
    example: 'Doe',
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    description: 'Username',
    example: 'johndoe123',
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    description: 'Email adress',
    example: 'johndoe@mail.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Passsword',
    example: 'pass123',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'Confirm passsword',
    example: 'pass123',
  })
  @IsString()
  @IsNotEmpty()
  confirmPassword: string;

  @ApiProperty({
    description: 'Role',
    example: Role.Caretaker,
  })
  @IsEnum(Role)
  @IsNotEmpty()
  role: Role;

  @ApiProperty({
    description: 'Organization',
    example: 'organizationId',
  })
  @IsString()
  @IsNotEmpty()
  organization: any;
}
