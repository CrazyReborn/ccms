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
exports.ColoniesController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const user_property_decorator_1 = require("../decorators/user-property.decorator");
const user_roles_decorator_1 = require("../decorators/user-roles.decorator");
const create_colony_dto_1 = require("../dto/create-colony.dto");
const update_colony_dto_1 = require("../dto/update-colony.dto");
const user_schema_1 = require("../schemas/user.schema");
const colonies_service_1 = require("./colonies.service");
let ColoniesController = class ColoniesController {
    constructor(coloniesService) {
        this.coloniesService = coloniesService;
    }
    find(userId, role, orgId) {
        if (role === 0 || role === 4) {
            return this.coloniesService.findByOrg(orgId);
        }
        return this.coloniesService.find(userId);
    }
    findOne(id) {
        return this.coloniesService.findOne(id);
    }
    create(orgId, createColonyDto) {
        return this.coloniesService.create(createColonyDto, orgId);
    }
    update(id, updateColonyDto) {
        return this.coloniesService.update(id, updateColonyDto);
    }
    delete(id) {
        return this.coloniesService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, user_property_decorator_1.UserProperty)('id')),
    __param(1, (0, user_property_decorator_1.UserProperty)('role')),
    __param(2, (0, user_property_decorator_1.UserProperty)('organization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", void 0)
], ColoniesController.prototype, "find", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ColoniesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, user_property_decorator_1.UserProperty)('organization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_colony_dto_1.CreateColonyDto]),
    __metadata("design:returntype", void 0)
], ColoniesController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_colony_dto_1.UpdateColonyDto]),
    __metadata("design:returntype", void 0)
], ColoniesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ColoniesController.prototype, "delete", null);
ColoniesController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, user_roles_decorator_1.Roles)([user_schema_1.Role.OrganizationLeader, user_schema_1.Role.Caretaker, user_schema_1.Role.Admin]),
    (0, common_1.Controller)('colonies'),
    __metadata("design:paramtypes", [colonies_service_1.ColoniesService])
], ColoniesController);
exports.ColoniesController = ColoniesController;
//# sourceMappingURL=colonies.controller.js.map