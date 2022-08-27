import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { User } from '../schemas/user.schema';

export class UpdateOrganizationDto {
  @ApiProperty({
    description: 'Name of the organization',
    example: 'FlatBushCats',
  })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Leader(owner) of the organization',
    example: 'useroneid',
  })
  @IsOptional()
  owner: User;

  @ApiProperty({
    description: 'Memebers of the organization',
    example: ['useroneid', 'usertwoid'],
  })
  @IsOptional()
  members: User[];
}
