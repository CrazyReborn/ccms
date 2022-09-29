import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReportDto } from '../dto/create-report.dto';
import { Report } from '../schemas/report.schema';

@Injectable()
export class ReportsService {
  constructor(
    @InjectModel(Report.name)
    private readonly reportModel: Model<Report>,
  ) {}

  async findAll(orgId: string) {
    const reports = await this.reportModel
      .find({ organization: orgId })
      .populate('filledBy')
      .populate('task')
      .exec();
    return reports;
  }

  async findOne(id: string) {
    const report = await this.reportModel
      .findById(id)
      .populate('filledBy')
      .populate('task')
      .exec();
    if (!report) {
      throw new NotFoundException('Report with this id was not found');
    }
    return report;
  }

  create(orgId: string, userId: string, createReportDto: CreateReportDto) {
    const newReport = {
      ...createReportDto,
      organization: orgId,
      filledBy: userId,
    };
    const report = new this.reportModel(newReport);
    return report.save();
  }
}
