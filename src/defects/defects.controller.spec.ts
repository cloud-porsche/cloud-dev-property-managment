import { Test, TestingModule } from '@nestjs/testing';
import { DefectsController } from './defects.controller';
import { DefectsService } from './defects.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Defect } from './entities/defect.entity';

describe('DefectsController', () => {
  let controller: DefectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DefectsController],
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

    controller = module.get<DefectsController>(DefectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
