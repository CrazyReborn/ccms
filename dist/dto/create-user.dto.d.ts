import { Role } from '../schemas/user.schema';
export declare class CreateUserDto {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: Role;
    organization: any;
}
