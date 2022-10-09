import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.colonyModel
      .find({ caretakers: { $in: [userId] } })
      .populate(['caretakers', 'registeredCats'])
      .exec();
  }

  async findByOrg(orgId: string) {
    const colonies = await this.colonyModel
      .find({ organization: orgId })
      .populate(['caretakers', 'registeredCats'])
      .exec();
    return colonies;
  }

  async findOne(id: string) {
    const colony = this.colonyModel
      .findById(id)
      .populate(['caretakers', 'registeredCats'])
      .exec();
    if (!colony) {
      throw new NotFoundException('Colony with this id does not exist');
    }
    return colony;
  }

  async create(createColonyDto: CreateColonyDto, orgId: string) {
    const newColony = {
      ...createColonyDto,
      registeredCats: [],
      organization: orgId,
    };
    const colony = new this.colonyModel(newColony);
    return colony.save();
  }

  async createForCaretaker(
    createColonyDto: CreateColonyDto,
    orgId: string,
    userId: string,
  ) {
    const newColony = {
      ...createColonyDto,
      registeredCats: [],
      organization: orgId,
      caretakers: [userId],
    };
    const colony = new this.colonyModel(newColony);
    return colony.save();
  }

  async update(id: string, updateColonydto: UpdateColonyDto) {
    const colony = this.colonyModel.findOneAndUpdate(
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
