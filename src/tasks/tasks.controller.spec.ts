import { Test, TestingModule } from '@nestjs/testing';
import { TaskStub } from '../../test/stubs/task.stub';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

describe('TasksController', () => {
  let controller: TasksController;
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [
        {
          provide: TasksService,
          useValue: {
            find: jest.fn().mockResolvedValue(TaskStub()),
            findOne: jest.fn().mockResolvedValue(TaskStub()),
            create: jest.fn().mockResolvedValue(TaskStub()),
            update: jest.fn().mockResolvedValue(TaskStub()),
            remove: jest.fn().mockResolvedValue(TaskStub()),
          },
        },
      ],
    }).compile();

    controller = module.get<TasksController>(TasksController);
    service = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  const orgId = '41224d776a326fb40f000001';
  const id = '41224d776a326fb40f000001';
  let result;

  const dto = {
    assignedTo: id,
    date: Date.now(),
    location: [112, 112],
    organization: orgId,
    done: false,
  };

  describe('find', () => {
    beforeEach(async () => {
      jest.spyOn(service, 'find');
      result = await controller.find(orgId);
    });

    it('should call serivce.find with orgId', () => {
      expect(service.find).toBeCalledWith(orgId);
    });

    it('result should be equal to TaskStub', () => {
      expect(result).toEqual(TaskStub());
    });
  });

  describe('findOne', () => {
    beforeEach(async () => {
      jest.spyOn(service, 'findOne');
      result = await controller.findOne(id);
    });

    it('should call service.findOne with id', () => {
      expect(service.findOne).toBeCalledWith(id);
    });

    it('result should be equal to TaskStub', () => {
      expect(result).toEqual(TaskStub());
    });
  });

  describe('create', () => {
    beforeEach(async () => {
      jest.spyOn(service, 'create');
      result = await controller.create(orgId, dto);
    });

    it('should call service.create wirh orgId and dto', () => {
      expect(service.create).toBeCalledWith(orgId, dto);
    });

    it('result shoulbe be equal to TaskStub', () => {
      expect(result).toEqual(TaskStub());
    });
  });

  describe('update', () => {
    beforeEach(async () => {
      jest.spyOn(service, 'update');
      result = await controller.update(id, dto);
    });

    it('should call service.update with id and dto', () => {
      expect(service.update).toBeCalledWith(id, dto);
    });

    it('result should be equal to TaskStub', () => {
      expect(result).toEqual(TaskStub());
    });
  });

  describe('remove', () => {
    beforeEach(async () => {
      jest.spyOn(service, 'remove');
      result = await controller.remove(id);
    });

    it('should called service.remove with id', () => {
      expect(service.remove).toBeCalledWith(id);
    });

    it('result should be equal to TaskStub', () => {
      expect(result).toEqual(TaskStub());
    });
  });
});
