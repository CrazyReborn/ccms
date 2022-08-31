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
exports.OrganizationsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const organization_schema_1 = require("../schemas/organization.schema");
let OrganizationsService = class OrganizationsService {
    constructor(organizationModel) {
        this.organizationModel = organizationModel;
    }
    find() {
        return this.organizationModel
            .find()
            .populate('members', 'caretakers')
            .exec();
    }
    async findOne(id) {
        const org = await this.organizationModel.findById(id);
        if (!org) {
            throw new common_1.NotFoundException('The organization with this id was not found');
        }
        return org;
    }
    async create(createOrganizationDto) {
        const org = new this.organizationModel(createOrganizationDto);
        return org.save();
    }
    async update(id, updateOrganizationDto) {
        const org = await this.organizationModel.findOneAndUpdate({ _id: id }, { $set: updateOrganizationDto }, { new: true });
        return org;
    }
    async delete(id) {
        const org = await this.organizationModel.findById(id);
        if (!org) {
            throw new common_1.NotFoundException('The organization with this id was not found');
        }
        return await org.delete();
    }
};
OrganizationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(organization_schema_1.Organization.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrganizationsService);
exports.OrganizationsService = OrganizationsService;
//# sourceMappingURL=organizations.service.js.map