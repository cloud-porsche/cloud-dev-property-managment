import { Test, TestingModule } from '@nestjs/testing';
import { DefectsService } from './defects.service';

describe('DefectsService', () => {
  let service: DefectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefectsService],
    }).compile();

    service = module.get<DefectsService>(DefectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
