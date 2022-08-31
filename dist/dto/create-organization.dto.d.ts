import { User } from '../schemas/user.schema';
export declare class CreateOrganizationDto {
    name: string;
    owner: User;
    members: User[];
}
