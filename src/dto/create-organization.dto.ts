import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { User } from '../schemas/user.schema';

export class CreateOrganizationDto {
  @ApiProperty({
    description: 'Name of the organization',
    example: 'FlatBushCats',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Leader(owner) of the organization',
    example: 'useroneid',
  })
  @IsNotEmpty()
  owner: User;

  @ApiProperty({
    description: 'Memebers of the organization',
    example: ['useroneid', 'usertwoid'],
  })
  members: User[];
}
