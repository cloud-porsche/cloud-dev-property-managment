import { PartialType } from '@nestjs/mapped-types';
import { CreateDefectDto } from './create-defect.dto';

export class UpdateDefectDto extends PartialType(CreateDefectDto) {}
