import { NotFoundException } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import {
  closeInMongodConnection,
  rootMongooseTestModule,
} from '../../test/helpers/mongo-memory-server.helper';
import { UserStub } from '../../test/stubs/user.stub';
import { CreateOrganizationDto } from '../dto/create-organization.dto';
import { UpdateOrganizationDto } from '../dto/update-organization.dto';
import {
  Organization,
  OrganizationDoc,
  OrganizationSchema,
} from '../schemas/organization.schema';
import { OrganizationsService } from './organizations.service';

describe('OrganizationsService', () => {
  let service: OrganizationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([
          { name: Organization.name, schema: OrganizationSchema },
        ]),
      ],
      providers: [OrganizationsService],
    }).compile();

    service = module.get<OrganizationsService>(OrganizationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  afterAll(async () => {
    await closeInMongodConnection();
  });

  let id: string;
  let result;
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
    beforeEach(async () => {
      result = await service.find();
    });

    it('should return an empty array', () => {
      expect(result).toEqual([]);
    });
  });

  describe('findOne', () => {
    let created;
    beforeEach(async () => {
      created = await service.create(createOrganizationDto);
      result = await service.findOne(created._id);
    });

    it('result and created should have the same properties', async () => {
      expect(result).toHaveProperty('name', created.name);
      expect(result).toHaveProperty('members');
      expect(result).toHaveProperty('owner');
    });
  });

  describe('create', () => {
    let created;
    beforeEach(async () => {
      created = await service.create(createOrganizationDto);
    });

    it('should be an instance of Model<Organization>', () => {
      expect(result).toBeInstanceOf(Model<Organization>);
    });
  });

  describe('update', () => {
    let created;
    let foundUpdated;

    beforeEach(async () => {
      created = await service.create(createOrganizationDto);
      await service.update(created._id, updateOrganizationDto);
      foundUpdated = await service.findOne(created['_id']);
    });

    it('found doc should have updated name and members properties', () => {
      expect(foundUpdated).toHaveProperty('name', updateOrganizationDto.name);
      expect(foundUpdated).toHaveProperty(
        'members',
        updateOrganizationDto.members,
      );
    });
  });

  describe('delete', () => {
    let created;
    let deleted;
    beforeEach(async () => {
      created = await service.create(createOrganizationDto);
    });

    it('the doc should be found before deletion, but not after', async () => {
      const found = await service.findOne(created._id);
      expect(found).toHaveProperty('name', created.name);
      await service.delete(created._id);
      expect(service.findOne(created._id)).rejects.toThrow(
        new NotFoundException('The organization with this id was not found'),
      );
    });
  });
});
