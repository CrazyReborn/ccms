import { Test, TestingModule } from '@nestjs/testing';
import { UserStub } from '../../test/stubs/user.stub';
import { CreateUserDto } from '../dto/create-user.dto';
import { Role, User } from '../schemas/user.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            findOne: jest.fn().mockReturnValue(UserStub()),
            create: jest.fn().mockReturnValue(UserStub()),
            delete: jest.fn().mockReturnValue(UserStub()),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findOne', () => {
    let user: User;
    it('UserStub should be returned', async () => {
      jest.spyOn(service, 'findOne');
      expect(controller.findOne('123id')).toStrictEqual(UserStub());
    });
    it("should call findOne method of serivce with id of value '123id' ", async () => {
      jest.spyOn(service, 'findOne');
      controller.findOne('123id');
      expect(service.findOne).toBeCalledWith('123id');
    });
  });

  describe('create', () => {
    let user: User;
    const dto: CreateUserDto = {
      firstName: 'John',

      lastName: 'Doe',

      username: 'jaydee',

      email: 'jaydee@mail.com',

      password: 'pass123',

      confirmPassword: 'pass123',

      role: Role.Caretaker,
    };
    beforeEach(async () => {
      jest.spyOn(service, 'create');
      user = await controller.create(dto);
    });

    it('should call service.create with body of dto', async () => {
      expect(service.create).toBeCalledWith(dto);
    });

    it('should return cretaed a user', async () => {
      expect(user).toEqual(UserStub());
    });
  });

  describe('delete', () => {
    let user: User;
    beforeEach(async () => {
      user = await controller.delete('123id');
      jest.spyOn(service, 'delete');
    });

    it('should call delete method of serivce with id of 123id', async () => {
      expect(service.delete).toBeCalledWith('123id');
    });

    it('should return deleted user', async () => {
      expect(user).toEqual(UserStub());
    });
  });
});
