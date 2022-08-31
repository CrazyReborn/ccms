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
import { CreateColonyDto } from '../dto/create-colony.dto';
import { UpdateColonyDto } from '../dto/update-colony.dto';
import { Colony } from '../schemas/colony.schema';
export declare class ColoniesService {
    private readonly colonyModel;
    constructor(colonyModel: Model<Colony>);
    find(userId: string): Promise<(import("mongoose").Document<unknown, any, Colony> & Colony & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findByOrg(orgId: string): Promise<Omit<import("mongoose").Document<unknown, any, Colony> & Colony & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, any, Colony> & Colony & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(createColonyDto: CreateColonyDto, orgId: string): Promise<import("mongoose").Document<unknown, any, Colony> & Colony & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateColonydto: UpdateColonyDto): Promise<import("mongoose").Document<unknown, any, Colony> & Colony & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): Promise<any>;
}
