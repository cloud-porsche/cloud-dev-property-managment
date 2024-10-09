import { Test, TestingModule } from '@nestjs/testing';
import { DefectsController } from './defects.controller';
import { DefectsService } from './defects.service';

describe('DefectsController', () => {
  let controller: DefectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DefectsController],
      providers: [DefectsService],
    }).compile();

    controller = module.get<DefectsController>(DefectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
