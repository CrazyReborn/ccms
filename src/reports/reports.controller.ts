import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserProperty } from '../decorators/user-property.decorator';
import { Roles } from '../decorators/user-roles.decorator';
import { CreateReportDto } from '../dto/create-report.dto';
import { Role } from '../schemas/user.schema';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}
  @Roles([Role.OrganizationLeader])
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@UserProperty('organization') orgId: string) {
    return this.reportsService.findAll(orgId);
  }

  @Roles([Role.OrganizationLeader])
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reportsService.findOne(id);
  }

  @Roles([Role.Caretaker])
  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @UserProperty('organization') orgId: string,
    @UserProperty('id') userId: string,
    @Body() createReportDto: CreateReportDto,
  ) {
    return this.reportsService.create(orgId, userId, createReportDto);
  }
}
