import { Module } from '@nestjs/common';
import { DefectsService } from './defects.service';
import { DefectsController } from './defects.controller';
import { Defect } from './entities/defect.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Defect])],
  controllers: [DefectsController],
  providers: [DefectsService],
})
export class DefectsModule {}
