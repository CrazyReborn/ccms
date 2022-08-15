import { Test, TestingModule } from '@nestjs/testing';
import { ColonyStub } from '../../test/stubs/colony.stub';
import { CreateColonyDto } from '../dto/create-colony.dto';
import { UpdateColonyDto } from '../dto/update-colony.dto';
import { ColoniesController } from './colonies.controller';
import { ColoniesService } from './colonies.service';

describe('ColoniesController', () => {
  let controller: ColoniesController;
  let service: ColoniesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColoniesController],
      providers: [
        {
          provide: ColoniesService,
          useValue: {
            find: jest.fn().mockReturnValue([ColonyStub()]),
            findOne: jest.fn().mockReturnValue(ColonyStub()),
            create: jest.fn().mockReturnValue(ColonyStub()),
            delete: jest.fn().mockReturnValue(ColonyStub()),
            update: jest.fn().mockReturnValue(ColonyStub()),
          },
        },
      ],
    }).compile();

    controller = module.get<ColoniesController>(ColoniesController);
    service = module.get<ColoniesService>(ColoniesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('find', () => {
    let result;
    const userId = 'userId';

    beforeEach(async () => {
      jest.spyOn(service, 'find');

      result = await controller.find(userId);
    });

    it('should call service.find with userId', () => {
      expect(service.find).toBeCalledWith(userId);
    });

    it('should return a ColonyStub', () => {
      expect(result).toEqual([ColonyStub()]);
    });
  });

  describe('findOne', () => {
    let result;
    const id = '123id';

    beforeEach(async () => {
      jest.spyOn(service, 'findOne');
      result = await controller.findOne(id);
    });

    it('should call service.findOne with id of 123id', () => {
      expect(service.findOne).toBeCalledWith(id);
    });

    it('should return ColonyStub', () => {
      expect(result).toEqual(ColonyStub());
    });
  });

  describe('create', () => {
    let result;
    const userId = 'userId';
    const createColonyDto: CreateColonyDto = {
      name: 'Gorki 2',
      size: 12,
      caretakers: ['userId'],
      location: [123, 123],
      radius: 500,
    };

    beforeEach(async () => {
      jest.spyOn(service, 'create');
      result = await controller.create(userId, createColonyDto);
    });

    it('should call service.create with createColonyDto', () => {
      expect(service.create).toBeCalledWith(userId, createColonyDto);
    });

    it('should return a colonyStub', () => {
      expect(result).toEqual(ColonyStub());
    });
  });

  describe('update', () => {
    let result;
    const id = '123id';
    const updateColonyDto: UpdateColonyDto = {
      name: 'Gorki 2',
      size: 12,
      caretakers: [],
      location: [123, 123],
      radius: 500,
    };

    beforeEach(async () => {
      jest.spyOn(service, 'update');
      result = await controller.update(id, updateColonyDto);
    });

    it('should call service.update with id and updatecolonydto', () => {
      expect(service.update).toBeCalledWith(id, updateColonyDto);
    });

    it('result should be equal to ColonyStub', () => {
      expect(result).toEqual(ColonyStub());
    });
  });

  describe('delete', () => {
    let result;
    const id = '123id';

    beforeEach(async () => {
      jest.spyOn(service, 'delete');
      result = await controller.delete(id);
    });

    it('should call service.delete with id of 123id', () => {
      expect(service.delete).toBeCalledWith(id);
    });

    it('result should be equal to ColonyStub', () => {
      expect(result).toEqual(ColonyStub());
    });
  });
});
