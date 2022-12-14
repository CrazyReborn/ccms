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
exports.CreateColonyDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateColonyDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Name of the colony',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateColonyDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Size of the colony',
        example: 12,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateColonyDto.prototype, "size", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Caretakers assigned to the colony',
        example: ['useridone', 'useridtwo'],
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateColonyDto.prototype, "caretakers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Location of the colony',
        example: [52.1286, 16.7234],
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    __metadata("design:type", Array)
], CreateColonyDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Radius for the colony's location",
        example: 200,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    __metadata("design:type", Number)
], CreateColonyDto.prototype, "radius", void 0);
exports.CreateColonyDto = CreateColonyDto;
//# sourceMappingURL=create-colony.dto.js.map