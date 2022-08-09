import { NotFoundException } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import {
  closeInMongodConnection,
  rootMongooseTestModule,
} from '../../test/helpers/mongo-memory-server.helper';
import { CreateUserDto } from '../dto/create-user.dto';
import { Role, User, UserSchema } from '../schemas/user.schema';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
      ],
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should not find any users', async () => {
    const result = await service.findAll();
    expect(result).toEqual([]);
  });

  describe('create', () => {
    const newUser: CreateUserDto = {
      firstName: 'John',
      lastName: 'Doe',
      username: 'jaydee',
      email: 'email@google.com',
      password: '12345',
      confirmPassword: '12345',
      role: Role.Caretaker,
    };
    it('should return a new User', async () => {
      const result = await service.create(newUser);
      expect(result).toBeInstanceOf(Model<User>);
    });
    it('new user should match found user', async () => {
      const result = await service.create(newUser);
      const id: string = result['_id'];
      const found = await service.findOne(id);
      expect(result).toHaveProperty('colonies', []);
      expect(result).toHaveProperty('email', result.email);
      expect(result).toHaveProperty('firstName', result.firstName);
      expect(result).toHaveProperty('lastName', result.lastName);
      expect(result).toHaveProperty('password', result.password);
      expect(result).toHaveProperty('firstName', result.firstName);
      expect(result).toHaveProperty('_id', result['_id']);
    });
  });

  describe('delete', () => {
    const newUser: CreateUserDto = {
      firstName: 'John',
      lastName: 'Doe',
      username: 'jaydee',
      email: 'email@google.com',
      password: '12345',
      confirmPassword: '12345',
      role: Role.Caretaker,
    };
    let id: string;
    it('should return a user', async () => {
      const user = await service.create(newUser);
      id = user['_id'];
      const result = await service.delete(id);
      expect(result).toBeInstanceOf(Model<User>);
    });
    it('should throw error', async () => {
      await expect(service.delete(id)).rejects.toEqual(
        new NotFoundException('User that is meant to be deleted was not found'),
      );
    });
  });

  afterAll(async () => {
    await closeInMongodConnection();
  });
});
