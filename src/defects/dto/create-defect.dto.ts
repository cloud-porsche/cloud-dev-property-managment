import { PickType } from '@nestjs/mapped-types';
import { Defect } from '../entities/defect.entity';

export class CreateDefectDto extends PickType(Defect, [
  'name',
  'location',
  'descriptionShort',
  'descriptionLong',
] as const) {}
