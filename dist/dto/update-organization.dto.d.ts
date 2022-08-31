import { User } from '../schemas/user.schema';
export declare class UpdateOrganizationDto {
    name: string;
    owner: User;
    members: User[];
}
