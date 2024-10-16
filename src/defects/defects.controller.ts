import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DefectsService } from './defects.service';
import { CreateDefectDto } from './dto/create-defect.dto';
import { UpdateDefectDto } from './dto/update-defect.dto';
import { UUID } from 'node:crypto';

@Controller('defects')
export class DefectsController {
  constructor(private readonly defectsService: DefectsService) {}

  @Post()
  create(@Body() createDefectDto: CreateDefectDto) {
    return this.defectsService.create(createDefectDto);
  }

  @Get()
  findAll() {
    return this.defectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: UUID) {
    return this.defectsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: UUID, @Body() updateDefectDto: UpdateDefectDto) {
    return this.defectsService.update(id, updateDefectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: UUID) {
    return this.defectsService.remove(id);
  }
}
