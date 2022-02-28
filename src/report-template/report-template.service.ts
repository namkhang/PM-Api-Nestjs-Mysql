import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReportTemplateDto } from './dto/create-report-template.dto';
import { UpdateReportTemplateDto } from './dto/update-report-template.dto';
import { ReportTemplate } from './entities/report-template.entity';

@Injectable()
export class ReportTemplateService {


  
  constructor(@InjectRepository(ReportTemplate) private userRepo : Repository<ReportTemplate>){}

  create(createReportTemplateDto: CreateReportTemplateDto) {
    return 'This action adds a new reportTemplate';
  }


  async findAll() {
    const query = this.userRepo.createQueryBuilder('report_template')
    .innerJoinAndSelect('report_template.listReport' , 'report_template_id')
    const result = await query.getMany();
    return result
  }


  findOne(id: number) {
    return `This action returns a #${id} reportTemplate`;
  }

  update(id: number, updateReportTemplateDto: UpdateReportTemplateDto) {
    return `This action updates a #${id} reportTemplate`;
  }

  remove(id: number) {
    return `This action removes a #${id} reportTemplate`;
  }
}
