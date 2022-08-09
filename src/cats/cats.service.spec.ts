import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import {
  closeInMongodConnection,
  rootMongooseTestModule,
} from '../../test/helpers/mongo-memory-server.helper';
import { CreateCatDto } from '../dto/create-cat.dto';
import { UpdateCatDto } from '../dto/update-cat.dto';
import { Cat, CatDoc, CatSchema, Class, Sex } from '../schemas/cat.schema';
import { CatsService } from './cats.service';

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
      ],
      providers: [CatsService],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  afterAll(async () => {
    await closeInMongodConnection();
  });

  //findOne
  describe('findOne', () => {
    let cat: CatDoc;
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

    let foundCat: Cat;
    beforeEach(async () => {
      cat = await service.create(catDto);
      jest.spyOn(service, 'findOne');
      foundCat = await service.findOne(cat._id);
    });

    it('should call findOne with id', async () => {
      expect(service.findOne).toBeCalledWith(cat._id);
    });

    it('should return a model type cat', async () => {
      expect(foundCat).toBeInstanceOf(Model<Cat>);
    });

    it('properties of created cat should match properties of found cat', async () => {
      expect(foundCat).toHaveProperty('name', cat.name);
      expect(foundCat).toHaveProperty('age', cat.age);
      expect(foundCat).toHaveProperty('sex', cat.sex);
      expect(foundCat).toHaveProperty('sterilized', cat.sterilized);
      expect(foundCat).toHaveProperty('vaccinated', cat.vaccinated);
      expect(foundCat).toHaveProperty('class', cat.class);
      expect(foundCat).toHaveProperty('features', cat.features);
      expect(foundCat).toHaveProperty('parents', cat.parents);
      expect(foundCat).toHaveProperty('descendants', cat.descendants);
    });
  });

  //create
  describe('create', () => {
    let cat: Cat;
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

    beforeEach(async () => {
      jest.spyOn(service, 'create');
      cat = await service.create(catDto);
    });

    it('should return a cat moedl', async () => {
      expect(cat).toBeInstanceOf(Model<Cat>);
    });
  });

  //delete
  describe('delete', () => {
    let cat: CatDoc;
    let deletedCat: CatDoc;
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

    beforeEach(async () => {
      jest.spyOn(service, 'delete');
      cat = await service.create(catDto);
      deletedCat = await service.delete(cat._id);
    });

    it('should call delete method of a service', async () => {
      expect(service.delete).toBeCalledWith(cat._id);
    });

    it('properties of the deleted cat should match properties of the created cat', () => {
      expect(deletedCat).toHaveProperty('_id', cat._id);
      expect(deletedCat).toHaveProperty('name', cat.name);
      expect(deletedCat).toHaveProperty('age', cat.age);
      expect(deletedCat).toHaveProperty('sex', cat.sex);
      expect(deletedCat).toHaveProperty('sterilized', cat.sterilized);
      expect(deletedCat).toHaveProperty('vaccinated', cat.vaccinated);
      expect(deletedCat).toHaveProperty('class', cat.class);
      expect(deletedCat).toHaveProperty('features', cat.features);
      expect(deletedCat).toHaveProperty('parents', cat.parents);
      expect(deletedCat).toHaveProperty('descendants', cat.descendants);
    });
  });

  //update
  describe('update', () => {
    let cat: CatDoc;
    let updated: CatDoc;
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

    const updatedCat: UpdateCatDto = {
      ...catDto,
      name: 'crayon',
    };
    console.log(updatedCat.name);

    beforeEach(async () => {
      jest.spyOn(service, 'update');
      cat = await service.create(catDto);
      updated = await service.update(cat._id, updatedCat);
    });

    it('should call update method of service', () => {
      expect(service.update).toBeCalledWith(cat._id, updatedCat);
    });

    it('should return a cat model', () => {
      expect(updated).toBeInstanceOf(Model<Cat>);
    });

    it('returned cat should have the same properites as the original cat, outside of the name', () => {
      expect(updated).toHaveProperty('_id', cat._id);
      expect(updated).toHaveProperty('name', updatedCat.name);
      expect(updated).toHaveProperty('age', cat.age);
      expect(updated).toHaveProperty('sex', cat.sex);
      expect(updated).toHaveProperty('sterilized', cat.sterilized);
      expect(updated).toHaveProperty('vaccinated', cat.vaccinated);
      expect(updated).toHaveProperty('class', cat.class);
      expect(updated).toHaveProperty('features', cat.features);
      expect(updated).toHaveProperty('parents', cat.parents);
      expect(updated).toHaveProperty('descendants', cat.descendants);
    });
  });
});
