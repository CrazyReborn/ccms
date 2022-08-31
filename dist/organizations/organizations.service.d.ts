/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { CreateOrganizationDto } from '../dto/create-organization.dto';
import { UpdateOrganizationDto } from '../dto/update-organization.dto';
import { Organization } from '../schemas/organization.schema';
export declare class OrganizationsService {
    private readonly organizationModel;
    constructor(organizationModel: Model<Organization>);
    find(): Promise<Omit<import("mongoose").Document<unknown, any, Organization> & Organization & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, any, Organization> & Organization & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(createOrganizationDto: CreateOrganizationDto): Promise<import("mongoose").Document<unknown, any, Organization> & Organization & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateOrganizationDto: UpdateOrganizationDto): Promise<import("mongoose").Document<unknown, any, Organization> & Organization & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): Promise<any>;
}
