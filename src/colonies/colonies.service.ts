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

  async find(userId: string) {
    return this.colonyModel.find({ caretakers: { $in: [userId] } }).exec();
  }

  async findByOrg(orgId: string) {
    return this.colonyModel
      .find({ organization: orgId })
      .populate('caretakers')
      .exec();
  }

  async findOne(id: string) {
    return this.colonyModel.findById(id);
  }

  async create(userId: string, createColonyDto: CreateColonyDto) {
    const newColony = {
      ...createColonyDto,
      caretakers: [userId],
      registeredCats: [],
    };
    const colony = new this.colonyModel(newColony);
    return colony.save();
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
