import mongoose from 'mongoose';
import { Doc } from 'prettier';
import { User } from './user.schema';
export declare type OrganizationDoc = Organization & Doc;
export declare class Organization {
    name: string;
    owner: User;
    members: User[];
}
export declare const OrganizationSchema: mongoose.Schema<Organization, mongoose.Model<Organization, any, any, any, any>, {}, {}, {}, {}, "type", Organization>;
