import { Injectable } from '@nestjs/common';
import { CreateDefectDto } from './dto/create-defect.dto';
import { UpdateDefectDto } from './dto/update-defect.dto';
import { Defect } from './entities/defect.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DefectsService {
  constructor(
    @InjectRepository(Defect)
    private defectRepository: Repository<Defect>,
  ) {}

  create(createDefectDto: CreateDefectDto) {
    return this.defectRepository.save(new Defect(createDefectDto));
  }

  findAll() {
    return this.defectRepository.find();
  }

  findOne(id: number) {
    return this.defectRepository.findOneBy({ id });
  }

  update(id: number, updateDefectDto: UpdateDefectDto) {
    return this.defectRepository.update(id, updateDefectDto);
  }

  remove(id: number) {
    return this.defectRepository.delete(id);
  }
}
