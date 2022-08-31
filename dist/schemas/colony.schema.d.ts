import mongoose, { Document } from 'mongoose';
import { Cat } from './cat.schema';
import { Organization } from './organization.schema';
import { User } from './user.schema';
export declare type ColonyDoc = Colony & Document;
export declare class Colony {
    name: string;
    size: number;
    caretakers: User[];
    location: number[];
    radius: number;
    registeredCats: Cat[];
    organization: Organization;
}
export declare const ColonySchema: mongoose.Schema<Colony, mongoose.Model<Colony, any, any, any, any>, {}, {}, {}, {}, "type", Colony>;
