import { Test, TestingModule } from '@nestjs/testing';
import { CatStub } from '../../test/stubs/cat.stub';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RoleGuard } from '../auth/role.guard';
import { CreateCatDto } from '../dto/create-cat.dto';
import { UpdateCatDto } from '../dto/update-cat.dto';
import { Class, Sex } from '../schemas/cat.schema';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('CatsController', () => {
  let controller: CatsController;
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [
        {
          provide: CatsService,
          useValue: {
            find: jest.fn().mockReturnValue([CatStub()]),
            findOne: jest.fn().mockReturnValue(CatStub()),
            create: jest.fn().mockReturnValue(CatStub()),
            delete: jest.fn().mockReturnValue(CatStub()),
            update: jest.fn().mockReturnValue(CatStub()),
          },
        },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue(() => true)
      .overrideGuard(RoleGuard)
      .useValue(() => true)
      .compile();

    controller = module.get<CatsController>(CatsController);
    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('find', () => {
    let result;
    beforeEach(async () => {
      jest.spyOn(service, 'find');
      result = await controller.find();
    });

    it('should call service.find', () => {
      expect(service.find).toBeCalled();
    });

    it('should return array of CatStub', async () => {
      expect(result).toEqual([CatStub()]);
    });
  });

  describe('findOne', () => {
    const id = '123id';
    let result;
    beforeEach(async () => {
      jest.spyOn(service, 'findOne');
      result = await controller.findOne(id);
    });

    it('should call service.find with id of 123id', () => {
      expect(service.findOne).toBeCalledWith(id);
    });

    it('should return a CatStub', () => {
      expect(result).toEqual(CatStub());
    });
  });

  describe('create', () => {
    const catDto: CreateCatDto = {
      name: 'snow',
      age: 12,
      sex: Sex.Male,
      sterilized: true,
      vaccinated: true,
      class: Class.Feral,
      features: [],
      parents: [],
      descendants: [],
    };
    let result;

    beforeEach(async () => {
      jest.spyOn(service, 'create');
      result = await controller.create(catDto);
    });

    it('should call service.create with CatDto', () => {
      expect(service.create).toBeCalledWith(catDto);
    });

    it('should return CatStub', () => {
      expect(result).toEqual(CatStub());
    });
  });

  describe('update', () => {
    const updateCatDto: UpdateCatDto = {
      name: 'snow',
      age: 12,
      sex: Sex.Male,
      sterilized: true,
      vaccinated: true,
      class: Class.Feral,
      features: [],
      parents: [],
      descendants: [],
    };
    let result;

    const id = '123id';

    beforeEach(async () => {
      jest.spyOn(service, 'update');
      result = await controller.update(id, updateCatDto);
    });

    it('should call service.update with updateCatDto', () => {
      expect(service.update).toBeCalledWith(id, updateCatDto);
    });

    it('should return CatStub', () => {
      expect(result).toEqual(CatStub());
    });
  });

  describe('delete', () => {
    const id = '123id';
    let result;
    beforeEach(async () => {
      jest.spyOn(service, 'delete');
      result = await controller.delete(id);
    });

    it('should call service.update with id', () => {
      expect(service.delete).toBeCalledWith(id);
    });

    it('should return catstub', () => {
      expect(result).toEqual(CatStub());
    });
  });
});
