import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrganizationDto } from '../dto/create-organization.dto';
import { UpdateOrganizationDto } from '../dto/update-organization.dto';
import { Organization } from '../schemas/organization.schema';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectModel(Organization.name)
    private readonly organizationModel: Model<Organization>,
  ) {}

  find() {
    return this.organizationModel
      .find()
      .populate('members', 'caretakers')
      .exec();
  }

  async findOne(id: string) {
    const org = await this.organizationModel.findById(id);
    if (!org) {
      throw new NotFoundException(
        'The organization with this id was not found',
      );
    }
    return org;
  }

  async create(createOrganizationDto: CreateOrganizationDto) {
    const org = new this.organizationModel(createOrganizationDto);
    return org.save();
  }

  async update(id: string, updateOrganizationDto: UpdateOrganizationDto) {
    const org = await this.organizationModel.findOneAndUpdate(
      { _id: id },
      { $set: updateOrganizationDto },
      { new: true },
    );
    return org;
  }

  async delete(id: string) {
    const org = await this.organizationModel.findById(id);
    if (!org) {
      throw new NotFoundException(
        'The organization with this id was not found',
      );
    }
    return await org.delete();
  }
}
