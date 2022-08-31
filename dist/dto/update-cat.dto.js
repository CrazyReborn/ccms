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
exports.UpdateCatDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const cat_schema_1 = require("../schemas/cat.schema");
class UpdateCatDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Cat's name",
        example: 'Snow',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateCatDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Cat's age in months",
        example: 12,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateCatDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Cat's gender",
        example: 'Female',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateCatDto.prototype, "sex", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Was the cat sterilized?',
        example: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateCatDto.prototype, "sterilized", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Was the cat vaccinated?',
        example: true,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateCatDto.prototype, "vaccinated", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Is the cat a stray or a feral',
        example: cat_schema_1.Class.Stray,
    }),
    (0, class_validator_1.IsEnum)(cat_schema_1.Class),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateCatDto.prototype, "class", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Distinct features of the cat',
        example: ['Left eye is absent', 'Right ear is absent'],
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], UpdateCatDto.prototype, "features", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Cat's parents (theirs ids), if they were registered in the system",
        example: ['catidone', 'catidtwo'],
    }),
    __metadata("design:type", Array)
], UpdateCatDto.prototype, "parents", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Cat's descendants (theirs ids), if they were registered in the system",
        example: ['catidone', 'catidtwo'],
    }),
    __metadata("design:type", Array)
], UpdateCatDto.prototype, "descendants", void 0);
exports.UpdateCatDto = UpdateCatDto;
//# sourceMappingURL=update-cat.dto.js.map