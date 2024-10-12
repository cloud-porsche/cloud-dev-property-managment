import { Test, TestingModule } from '@nestjs/testing';
import { DefectsService } from './defects.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Defect } from './entities/defect.entity';

describe('DefectsService', () => {
  let service: DefectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefectsService],
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: 'property-management',
          autoLoadEntities: true,
          synchronize: true, // DO NOT USE IN PRODUCTION
        }),
        TypeOrmModule.forFeature([Defect]),
      ],
    }).compile();

    service = module.get<DefectsService>(DefectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
