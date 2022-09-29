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
import { CreateReportDto } from '../dto/create-report.dto';
import { Report } from '../schemas/report.schema';
export declare class ReportsService {
    private readonly reportModel;
    constructor(reportModel: Model<Report>);
    findAll(orgId: string): Promise<Omit<Omit<import("mongoose").Document<unknown, any, Report> & Report & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, never>[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, any, Report> & Report & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    create(orgId: string, userId: string, createReportDto: CreateReportDto): Promise<import("mongoose").Document<unknown, any, Report> & Report & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
