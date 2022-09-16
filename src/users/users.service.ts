import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  async findOne(id: string): Promise<User | undefined> {
    return this.userModel.findById(id).exec();
  }

  async findUserByName(username: string) {
    const user = await this.userModel.findOne({ username: username }).exec();
    if (!user) {
      throw new NotFoundException('User with this name was not found');
    }
    return user;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findByOrg(org: string) {
    return this.userModel.find({ organization: org }).exec();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { username } = createUserDto;

    if (createUserDto.password !== createUserDto.confirmPassword) {
      throw new HttpException('Passwords do no match!', 400);
    }

    const existingUser = await this.userModel.findOne({
      username: createUserDto.username,
    });
    if (existingUser) {
      throw new HttpException('User with this username already exists', 400);
    }

    const { password, confirmPassword, ...DtoRemains } = createUserDto;
    const hash = await bcrypt.hash(password, 10);

    const newUser: User = {
      colonies: [],
      password: hash,
      organization: undefined,
      ...DtoRemains,
    };

    const createdUser = new this.userModel(newUser);

    return await createdUser.save();
  }

  async update(
    updateUserDto: UpdateUserDto,
    id: string,
  ): Promise<User | undefined> {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      { _id: id },
      { $set: updateUserDto },
      { new: true },
    );

    if (!updatedUser) {
      throw new NotFoundException('User with this id was not found');
    }

    return updatedUser;
  }

  async delete(id: string): Promise<User | undefined> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(
        'User that is meant to be deleted was not found',
      );
    }
    return user.delete();
  }
}
