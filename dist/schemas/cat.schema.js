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
exports.CatSchema = exports.Cat = exports.Class = exports.Sex = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const colony_schema_1 = require("./colony.schema");
var Sex;
(function (Sex) {
    Sex[Sex["Male"] = 0] = "Male";
    Sex[Sex["Female"] = 1] = "Female";
})(Sex = exports.Sex || (exports.Sex = {}));
var Class;
(function (Class) {
    Class[Class["Feral"] = 0] = "Feral";
    Class[Class["Stray"] = 1] = "Stray";
})(Class = exports.Class || (exports.Class = {}));
let Cat = class Cat {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Cat.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Cat.prototype, "age", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: Sex }),
    __metadata("design:type", Number)
], Cat.prototype, "sex", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Cat.prototype, "sterilized", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Cat.prototype, "vaccinated", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: Class }),
    __metadata("design:type", Number)
], Cat.prototype, "class", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Cat.prototype, "features", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Cat' }]),
    __metadata("design:type", Array)
], Cat.prototype, "parents", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Cat' }]),
    __metadata("design:type", Array)
], Cat.prototype, "descendants", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Colony' }]),
    __metadata("design:type", colony_schema_1.Colony)
], Cat.prototype, "colony", void 0);
Cat = __decorate([
    (0, mongoose_1.Schema)()
], Cat);
exports.Cat = Cat;
exports.CatSchema = mongoose_1.SchemaFactory.createForClass(Cat);
//# sourceMappingURL=cat.schema.js.map