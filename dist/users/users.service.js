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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../schemas/user.schema");
const bcrypt = require("bcrypt");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findOne(id) {
        return this.userModel.findById(id).exec();
    }
    async findUserByName(username) {
        const user = await this.userModel.findOne({ username: username }).exec();
        if (!user) {
            throw new common_1.NotFoundException('User with this name was not found');
        }
        return user;
    }
    async findAll() {
        return this.userModel.find().exec();
    }
    async findByOrg(org) {
        return this.userModel.find({ organization: org }).exec();
    }
    async create(createUserDto) {
        const { username } = createUserDto;
        if (createUserDto.password !== createUserDto.confirmPassword) {
            throw new common_1.HttpException('Passwords do no match!', 400);
        }
        const existingUser = await this.userModel.findOne({
            username: createUserDto.username,
        });
        if (existingUser) {
            throw new common_1.HttpException('User with this username already exists', 400);
        }
        const { password, confirmPassword } = createUserDto, DtoRemains = __rest(createUserDto, ["password", "confirmPassword"]);
        const hash = await bcrypt.hash(password, 10);
        const newUser = Object.assign({ colonies: [], password: hash, organization: undefined }, DtoRemains);
        const createdUser = new this.userModel(newUser);
        return await createdUser.save();
    }
    async update(updateUserDto, id) {
        const updatedUser = await this.userModel.findByIdAndUpdate({ _id: id }, { $set: updateUserDto }, { new: true });
        if (!updatedUser) {
            throw new common_1.NotFoundException('User with this id was not found');
        }
        return updatedUser;
    }
    async delete(id) {
        const user = await this.userModel.findById(id).exec();
        if (!user) {
            throw new common_1.NotFoundException('User that is meant to be deleted was not found');
        }
        return user.delete();
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map