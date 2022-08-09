import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from '../dto/create-cat.dto';
import { UpdateCatDto } from '../dto/update-cat.dto';
import { Cat } from '../schemas/cat.schema';

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat.name)
    private readonly catModel: Model<Cat>,
  ) {}

  find() {
    return this.catModel.find().exec();
  }

  async findOne(id: string) {
    const cat = await this.catModel.findById(id);
    if (!cat) {
      throw new NotFoundException('Cat with this id was not found');
    }
    return cat;
  }

  async create(createCatDto: CreateCatDto) {
    const cat = new this.catModel(createCatDto);
    return await cat.save();
  }

  async delete(id: string) {
    const deletedCat = await this.findOne(id);
    return deletedCat.delete();
  }

  async update(id: string, updateCatDto: UpdateCatDto) {
    const existingCat = await this.catModel
      .findByIdAndUpdate({ _id: id }, { $set: updateCatDto }, { new: true })
      .exec();

    if (!existingCat) {
      throw new NotFoundException('Cat with this id was not found');
    }

    return existingCat;
  }
}
