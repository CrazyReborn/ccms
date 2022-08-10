import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateColonyDto } from '../dto/create-colony.dto';
import { UpdateColonyDto } from '../dto/update-colony.dto';
import { Colony } from '../schemas/colony.schema';

@Injectable()
export class ColoniesService {
  constructor(
    @InjectModel(Colony.name)
    private readonly colonyModel: Model<Colony>,
  ) {}

  async find() {
    return this.colonyModel.find().populate('caretakers').exec();
  }

  async findOne(id: string) {
    return this.colonyModel.findById(id);
  }

  async create(createColonyDto: CreateColonyDto) {
    return this.colonyModel.create(createColonyDto);
  }

  async update(id: string, updateColonydto: UpdateColonyDto) {
    const colony = this.colonyModel.findByIdAndUpdate(
      { _id: id },
      { $set: updateColonydto },
      { new: true },
    );

    return colony;
  }

  async delete(id: string) {
    const colony = await this.colonyModel.findById(id);
    return colony.delete();
  }
}
