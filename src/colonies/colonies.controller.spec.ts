import { Test, TestingModule } from '@nestjs/testing';
import { ColoniesController } from './colonies.controller';

describe('ColoniesController', () => {
  let controller: ColoniesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColoniesController],
    }).compile();

    controller = module.get<ColoniesController>(ColoniesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
