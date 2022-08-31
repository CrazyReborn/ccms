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
exports.ColoniesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const colony_schema_1 = require("../schemas/colony.schema");
let ColoniesService = class ColoniesService {
    constructor(colonyModel) {
        this.colonyModel = colonyModel;
    }
    async find(userId) {
        return this.colonyModel.find({ caretakers: { $in: [userId] } }).exec();
    }
    async findByOrg(orgId) {
        const colonies = await this.colonyModel
            .find({ organization: orgId })
            .populate(['caretakers', 'registeredCats'])
            .exec();
        return colonies;
    }
    async findOne(id) {
        return this.colonyModel.findById(id);
    }
    async create(createColonyDto, orgId) {
        const newColony = Object.assign(Object.assign({}, createColonyDto), { registeredCats: [], organization: orgId });
        const colony = new this.colonyModel(newColony);
        return colony.save();
    }
    async update(id, updateColonydto) {
        const colony = this.colonyModel.findByIdAndUpdate({ _id: id }, { $set: updateColonydto }, { new: true });
        return colony;
    }
    async delete(id) {
        const colony = await this.colonyModel.findById(id);
        return colony.delete();
    }
};
ColoniesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(colony_schema_1.Colony.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ColoniesService);
exports.ColoniesService = ColoniesService;
//# sourceMappingURL=colonies.service.js.map