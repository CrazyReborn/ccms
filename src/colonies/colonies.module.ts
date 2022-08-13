import { Module } from '@nestjs/common';
import { ColoniesService } from './colonies.service';
import { ColoniesController } from './colonies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Colony, ColonySchema } from '../schemas/colony.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Colony.name, schema: ColonySchema }]),
  ],
  providers: [ColoniesService],
  controllers: [ColoniesController],
})
export class ColoniesModule {}
