"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const report_schema_1 = require("../schemas/report.schema");
let ReportsService = class ReportsService {
    constructor(reportModel) {
        this.reportModel = reportModel;
    }
    async findAll(orgId) {
        const reports = await this.reportModel
            .find({ organization: orgId })
            .populate('assignedTo')
            .exec();
        return reports;
    }
    async findOne(id) {
        const report = await this.reportModel.findById(id);
        if (!report) {
            throw new common_1.NotFoundException('Report with this id was not found');
        }
        return report;
    }
    create(orgId, userId, createReportDto) {
        const newReport = Object.assign(Object.assign({}, createReportDto), { organization: orgId, filledBy: userId });
        const report = new this.reportModel(newReport);
        return report.save();
    }
};
ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(report_schema_1.Report.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ReportsService);
exports.ReportsService = ReportsService;
//# sourceMappingURL=reports.service.js.map