import { Injectable } from '@nestjs/common';
import { CreateDefectDto } from './dto/create-defect.dto';
import { UpdateDefectDto } from './dto/update-defect.dto';
import { Defect, DefectStates } from './entities/defect.entity';
import { UUID } from 'node:crypto';

@Injectable()
export class DefectsService {
  defects: Defect[] = [];

  create(createDefectDto: CreateDefectDto) {
    const defect: Defect = {
      ...createDefectDto,
      id: crypto.randomUUID(),
      status: DefectStates.OPEN,
      reportedDate: new Date(),
    };
    return this.defects.push(defect);
  }

  findAll() {
    return this.defects;
  }

  findOne(id: UUID) {
    return this.defects.find((defect) => defect.id === id);
  }

  update(id: UUID, updateDefectDto: UpdateDefectDto) {
    const affectedDefect = this.defects.find((defect) => defect.id === id);
    if (!affectedDefect) {
      throw new Error('Defect does not exist');
    }
    return Object.assign(affectedDefect, updateDefectDto);
  }

  remove(id: UUID) {
    const defectIndex = this.defects.findIndex((defect) => defect.id === id);
    if (defectIndex === -1) {
      throw new Error('Defect does not exist');
    }
    return this.defects.splice(defectIndex, 1);
  }
}
