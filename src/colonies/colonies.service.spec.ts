import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { rootMongooseTestModule } from '../../test/helpers/mongo-memory-server.helper';
import { CreateColonyDto } from '../dto/create-colony.dto';
import { UpdateColonyDto } from '../dto/update-colony.dto';
import { Colony, ColonyDoc, ColonySchema } from '../schemas/colony.schema';
import { ColoniesService } from './colonies.service';

describe('ColoniesService', () => {
  let service: ColoniesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([
          { name: Colony.name, schema: ColonySchema },
        ]),
      ],
      providers: [ColoniesService],
    }).compile();

    service = module.get<ColoniesService>(ColoniesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  const createColonyDto: CreateColonyDto = {
    name: 'Gorki 2',
    size: 12,
    caretakers: [],
    location: [123, 123],
    radius: 500,
  };

  describe('find', () => {
    let result: ColonyDoc[];
    let id: string;

    beforeEach(async () => {
      jest.spyOn(service, 'find');
      result = await service.find();
    });

    it('should call service.findOne with id of created', () => {
      expect(service.find).toBeCalled();
    });

    it('should return created', () => {
      expect(result).toEqual([]);
    });
  });

  describe('findOne', () => {
    let result: ColonyDoc;
    let created: ColonyDoc;
    let id: string;

    beforeEach(async () => {
      jest.spyOn(service, 'findOne');
      created = await service.create(createColonyDto);
      id = created._id;
      result = await service.findOne(id);
    });

    it('should call service.findOne with id of created', () => {
      expect(service.findOne).toBeCalledWith(id);
    });

    it('result and created should have the same properties', () => {
      expect(result).toHaveProperty('name', created.name);
      expect(result).toHaveProperty('size', created.size);
      expect(result).toHaveProperty('caretakers', created.caretakers);
      expect(result).toHaveProperty('location', created.location);
      expect(result).toHaveProperty('radius', created.radius);
    });
  });

  describe('create', () => {
    let created: ColonyDoc;
    let id: string;

    beforeEach(async () => {
      jest.spyOn(service, 'create');
      created = await service.create(createColonyDto);
      id = created._id;
    });

    it('should call service.create with createColonyDto', () => {
      expect(service.create).toBeCalledWith(createColonyDto);
    });

    it('should return an instance of Model<Colony>', () => {
      expect(created).toBeInstanceOf(Model<Colony>);
    });
  });

  describe('update', () => {
    let result: ColonyDoc;
    let created: ColonyDoc;
    let updated: ColonyDoc;
    let id: string;

    const updateColonyDto: UpdateColonyDto = {
      name: 'Gorki',
      size: 12,
      caretakers: [],
      location: [123, 123],
      radius: 500,
    };

    beforeEach(async () => {
      jest.spyOn(service, 'update');
      created = await service.create(createColonyDto);
      id = created._id;
      result = await service.update(id, updateColonyDto);
      updated = await service.findOne(id);
    });

    it('should call service.update with id and updatecolonydto', () => {
      expect(service.update).toBeCalledWith(id, updateColonyDto);
    });

    it('the new doc should have new name property', () => {
      expect(result).toHaveProperty('name', 'Gorki');
    });
  });

  describe('delete', () => {
    let result: ColonyDoc;
    let created: ColonyDoc;
    let id: string;

    beforeEach(async () => {
      jest.spyOn(service, 'delete');
      created = await service.create(createColonyDto);
      id = created._id;
      result = await service.delete(id);
    });

    it('should call service.delete with id of 123id', () => {
      expect(service.delete).toBeCalledWith(id);
    });

    it('result and created should have equal properties', () => {
      expect(result).toHaveProperty('name', created.name);
      expect(result).toHaveProperty('size', created.size);
      expect(result).toHaveProperty('caretakers', created.caretakers);
      expect(result).toHaveProperty('location', created.location);
      expect(result).toHaveProperty('radius', created.radius);
    });
  });
});
