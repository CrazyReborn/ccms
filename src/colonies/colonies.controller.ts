import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateColonyDto } from '../dto/create-colony.dto';
import { UpdateColonyDto } from '../dto/update-colony.dto';
import { ColoniesService } from './colonies.service';

@Controller('colonies')
export class ColoniesController {
  constructor(private readonly coloniesService: ColoniesService) {}

  @Get()
  find() {
    return this.coloniesService.find();
  }

  @Get(':id')
  findOne(@Param() id: string) {
    return this.coloniesService.findOne(id);
  }

  @Post()
  create(@Body() createColonyDto: CreateColonyDto) {
    return this.coloniesService.create(createColonyDto);
  }

  @Patch(':id')
  update(@Param() id: string, @Body() updateColonyDto: UpdateColonyDto) {
    return this.coloniesService.update(id, updateColonyDto);
  }

  @Delete()
  delete(@Param() id: string) {
    return this.coloniesService.delete(id);
  }
}
