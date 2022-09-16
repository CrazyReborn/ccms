import { Colony } from '../schemas/colony.schema';
import { Organization } from '../schemas/organization.schema';
import { Role } from '../schemas/user.schema';
export declare class UpdateUserDto {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    colonies: Colony[];
    organization: Organization;
    role: Role;
}
