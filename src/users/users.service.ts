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

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  async findOne(id: string): Promise<User | undefined> {
    return this.userModel.findById(id).exec();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    if (createUserDto.password !== createUserDto.confirmPassword) {
      throw new HttpException('Passwords do no match!', 400);
    }

    const existingUser = await this.userModel.findOne({
      username: createUserDto.username,
    });

    if (existingUser) {
      throw new HttpException('User with this username already exists', 400);
    }

    const { confirmPassword, ...DtoRemains } = createUserDto;

    const newUser: User = {
      colonies: [],
      ...DtoRemains,
    };

    const createdUser = new this.userModel(newUser);

    return await createdUser.save();
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
