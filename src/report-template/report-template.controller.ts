import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReportTemplateService } from './report-template.service';
import { CreateReportTemplateDto } from './dto/create-report-template.dto';
import { UpdateReportTemplateDto } from './dto/update-report-template.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('ReportTemplate')
@Controller('report-template')
export class ReportTemplateController {
  constructor(private readonly reportTemplateService: ReportTemplateService) {}

  @Post()
  create(@Body() createReportTemplateDto: CreateReportTemplateDto) {
    return this.reportTemplateService.create(createReportTemplateDto);
  }

  @Get()
  findAll() {
    return this.reportTemplateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reportTemplateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReportTemplateDto: UpdateReportTemplateDto) {
    return this.reportTemplateService.update(+id, updateReportTemplateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reportTemplateService.remove(+id);
  }
}
