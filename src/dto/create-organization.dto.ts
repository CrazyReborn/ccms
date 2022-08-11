import { IsNotEmpty, IsString } from 'class-validator';
import { User } from '../schemas/user.schema';

export class CreateOrganizationDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  owner: User;

  @IsNotEmpty()
  members: User[];
}
