import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ReportTemplateService } from './report-template.service';
import { CreateReportTemplateDto } from './dto/create-report-template.dto';
import { UpdateReportTemplateDto } from './dto/update-report-template.dto';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('ReportTemplate')
@Controller('report-template')
export class ReportTemplateController {
  constructor(private readonly reportTemplateService: ReportTemplateService) {}

  @Post()
  @ApiOkResponse({description : 'Created'})
  @ApiBody({type : CreateReportTemplateDto})
  create(@Body() createReportTemplate: any) {
    return this.reportTemplateService.create(createReportTemplate);
  }

  @Get()
  findAll() {
    return this.reportTemplateService.findAll();
  }

  @Get('/search')
  search(@Query('query') query : string) {
    return this.reportTemplateService.search(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reportTemplateService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({description : 'Created'})
  @ApiBody({type : UpdateReportTemplateDto})
  update(@Param('id') id: string, @Body() updateReportTemplate: any) {
    return this.reportTemplateService.update(+id, updateReportTemplate);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reportTemplateService.remove(+id);
  }
}
