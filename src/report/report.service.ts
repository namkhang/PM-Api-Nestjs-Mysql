import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { Report } from './entities/report.entity';

@Injectable()
export class ReportService {


  
  constructor(@InjectRepository(Report) private reportRepo : Repository<Report>){}

  async create(createReportDto: CreateReportDto) {
    return {
      success : true ,
      data : await this.reportRepo.save(createReportDto)
    }
  }


  async findAll() {
    const query = this.reportRepo.createQueryBuilder('report')
    .innerJoinAndSelect('report.projectInfor' , 'idProject')
    .innerJoinAndSelect('report.userInfor' , 'idUser')
    .innerJoinAndSelect('report.reportTemplateInfor' , 'idReportTemplate')
    const result = await query.getMany();
    return result
  }

  async search(query : string){
     const data =  await this.reportRepo.find()
     const result = data.filter(i => i.report_data.name.toLowerCase().includes(query.toLowerCase()))
     return {
       success : true ,
       data : result
     }
  }


  async findOne(id: number) {
    return {
      success : true ,
      data : await this.reportRepo.findOne({id})
    }
  }

  async update(id: number, updateReportDto: UpdateReportDto) {
    return {
      success : true ,
      data : await this.reportRepo.update({id} , {...updateReportDto})
    }
  }

  async remove(id: number) {
    await this.reportRepo.delete({id})
    return {
      success : true 
    }
  }
}
