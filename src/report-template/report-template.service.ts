import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateReportTemplateDto } from './dto/update-report-template.dto';
import { ReportTemplate } from './entities/report-template.entity';

@Injectable()
export class ReportTemplateService {
  
  constructor(@InjectRepository(ReportTemplate) private reportTemplateRepo : Repository<ReportTemplate>){}

  async create(createReportTemplate: any) {
    createReportTemplate.field = createReportTemplate.field.join(',')
    return {
      success : true ,
      data : await this.reportTemplateRepo.save(createReportTemplate)
    }
  }


  async findAll() {
    const query = this.reportTemplateRepo.createQueryBuilder('report_template')
    .innerJoinAndSelect('report_template.listReport' , 'report_template_id')
    const result = await query.getMany();
    return result
  }


  async findOne(id: number) {
    return {
      success : true ,
      data : await this.reportTemplateRepo.findOne({id})
    }
  }

  async update(id: number, updateReportTemplate: any) {
    updateReportTemplate.field = updateReportTemplate.field.join(',')
    return {
      success : true ,
      data : await this.reportTemplateRepo.update({id} , {...updateReportTemplate})
    }
  }

  async remove(id: number) {
    await this.reportTemplateRepo.delete({id})
    return {
      success : true
    }
  }
}
