import mongoose from 'mongoose';
import { Colony } from './colony.schema';
import { Organization } from './organization.schema';
export declare type UserDoc = User & Document;
export declare enum Role {
    OrganizationLeader = 0,
    Caretaker = 1,
    Volunteer = 2,
    Admin = 3
}
export declare class User {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    colonies: Colony[];
    organization: Organization;
    role: Role;
}
export declare const UserSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, any>, {}, {}, {}, {}, "type", User>;
