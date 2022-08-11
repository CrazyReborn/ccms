import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationStub } from '../../test/stubs/organization.stub';
import { UserStub } from '../../test/stubs/user.stub';
import { CreateOrganizationDto } from '../dto/create-organization.dto';
import { UpdateOrganizationDto } from '../dto/update-organization.dto';
import { OrganizationsController } from './organizations.controller';
import { OrganizationsService } from './organizations.service';

describe('OrganizationsController', () => {
  let controller: OrganizationsController;
  let service: OrganizationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganizationsController],
      providers: [
        {
          provide: OrganizationsService,
          useValue: {
            find: jest.fn().mockReturnValue([OrganizationStub()]),
            findOne: jest.fn().mockReturnValue(OrganizationStub()),
            create: jest.fn().mockReturnValue(OrganizationStub()),
            delete: jest.fn().mockReturnValue(OrganizationStub()),
            update: jest.fn().mockReturnValue(OrganizationStub()),
          },
        },
      ],
    }).compile();

    controller = module.get<OrganizationsController>(OrganizationsController);
    service = module.get<OrganizationsService>(OrganizationsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  const createOrganizationDto: CreateOrganizationDto = {
    name: 'Flower',
    owner: UserStub(),
    members: [UserStub(), UserStub()],
  };

  const updateOrganizationDto: UpdateOrganizationDto = {
    name: 'Catboy',
    owner: UserStub(),
    members: [UserStub()],
  };

  describe('find', () => {
    let result;
    beforeEach(async () => {
      jest.spyOn(service, 'find');
      result = await controller.find();
    });

    it('should call service.find', () => {
      expect(service.find).toBeCalled();
    });

    it('should return an organization stub', () => {
      expect(result).toEqual([OrganizationStub()]);
    });

    describe('findOne', () => {
      let result;
      const id = '123id';
      beforeEach(async () => {
        jest.spyOn(service, 'findOne');
        result = await controller.findOne(id);
      });

      it('should call service.findOne with id', () => {
        expect(service.findOne).toBeCalledWith(id);
      });

      it('should return organization stub', () => {
        expect(result).toEqual(OrganizationStub());
      });
    });

    describe('create', () => {
      let result;

      beforeEach(async () => {
        jest.spyOn(service, 'create');
        result = await controller.create(createOrganizationDto);
      });

      it('should call service.create with dto', () => {
        expect(service.create).toBeCalledWith(createOrganizationDto);
      });

      it('result should be equal to OrganizationStub', () => {
        expect(result).toEqual(OrganizationStub());
      });
    });

    describe('update', () => {
      let result;
      const id = '123id';
      const updateDto = {};

      beforeEach(async () => {
        jest.spyOn(service, 'update');
        result = await controller.update(id, updateOrganizationDto);
      });

      it('should call service.update', () => {
        expect(service.update).toBeCalledWith(id, updateOrganizationDto);
      });

      it('result shoulbe be equal to OrganizationStub', () => {
        expect(result).toEqual(OrganizationStub());
      });
    });

    describe('delete', () => {
      let result;
      const id = '123id';

      beforeEach(async () => {
        jest.spyOn(service, 'delete');
        result = await controller.delete(id);
      });

      it('shoudl call service.delete with id', () => {
        expect(service.delete).toBeCalledWith(id);
      });

      it('result should be equal to OrganizationStub', () => {
        expect(result).toEqual(OrganizationStub());
      });
    });
  });
});
