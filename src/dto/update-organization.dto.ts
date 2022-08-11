import { IsOptional, IsString } from 'class-validator';
import { User } from '../schemas/user.schema';

export class UpdateOrganizationDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  owner: User;

  @IsOptional()
  members: User[];
}
