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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrganizationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const user_schema_1 = require("../schemas/user.schema");
class UpdateOrganizationDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of the organization',
        example: 'FlatBushCats',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateOrganizationDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Leader(owner) of the organization',
        example: 'useroneid',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", user_schema_1.User)
], UpdateOrganizationDto.prototype, "owner", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Memebers of the organization',
        example: ['useroneid', 'usertwoid'],
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdateOrganizationDto.prototype, "members", void 0);
exports.UpdateOrganizationDto = UpdateOrganizationDto;
//# sourceMappingURL=update-organization.dto.js.map