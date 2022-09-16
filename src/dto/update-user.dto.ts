import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { Colony } from '../schemas/colony.schema';
import { Organization } from '../schemas/organization.schema';
import { Role } from '../schemas/user.schema';

export class UpdateUserDto {
  @ApiProperty({
    description: 'First name',
    example: 'John',
  })
  @IsOptional()
  firstName: string;

  @ApiProperty({
    description: 'Last name',
    example: 'Doe',
  })
  @IsOptional()
  lastName: string;

  @ApiProperty({
    description: 'Username',
    example: 'johndoe',
  })
  @IsOptional()
  username: string;

  @ApiProperty({
    description: 'Email',
    example: 'johndoe@mail.com',
  })
  @IsOptional()
  email: string;

  @ApiProperty({
    description: `List of colonies' id`,
    example: '[colonyoneid, colonytwoid]',
  })
  @IsOptional()
  colonies: Colony[];

  @ApiProperty({
    description: 'Organization',
    example: 'orgid',
  })
  @IsOptional()
  organization: Organization;

  @ApiProperty({
    description: 'Organization',
    example: 'orgid',
  })
  @IsOptional()
  role: Role;
}
