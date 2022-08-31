import { User } from '../schemas/user.schema';
export declare class UpdateColonyDto {
    name: string;
    size: number;
    caretakers: User[];
    location: number[];
    radius: number;
}
