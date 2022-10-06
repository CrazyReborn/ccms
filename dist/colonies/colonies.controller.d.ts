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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateColonyDto } from '../dto/create-colony.dto';
import { UpdateColonyDto } from '../dto/update-colony.dto';
import { ColoniesService } from './colonies.service';
export declare class ColoniesController {
    private readonly coloniesService;
    constructor(coloniesService: ColoniesService);
    find(userId: string, role: number, orgId: string): Promise<Omit<import("mongoose").Document<unknown, any, import("../schemas/colony.schema").Colony> & import("../schemas/colony.schema").Colony & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, any, import("../schemas/colony.schema").Colony> & import("../schemas/colony.schema").Colony & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(orgId: string, userId: string, role: number, createColonyDto: CreateColonyDto): Promise<import("mongoose").Document<unknown, any, import("../schemas/colony.schema").Colony> & import("../schemas/colony.schema").Colony & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateColonyDto: UpdateColonyDto): Promise<import("mongoose").Document<unknown, any, import("../schemas/colony.schema").Colony> & import("../schemas/colony.schema").Colony & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    delete(id: string): Promise<any>;
}
