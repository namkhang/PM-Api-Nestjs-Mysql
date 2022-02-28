import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { Report } from './entities/report.entity';

@Injectable()
export class ReportService {


  
  constructor(@InjectRepository(Report) private userRepo : Repository<Report>){}

  create(createReportDto: CreateReportDto) {
    return 'This action adds a new report';
  }


  async findAll() {
    const query = this.userRepo.createQueryBuilder('report')
    .innerJoinAndSelect('report.projectInfor' , 'idProject')
    .innerJoinAndSelect('report.userInfor' , 'idUser')
    .innerJoinAndSelect('report.reportTemplateInfor' , 'idReportTemplate')
    const result = await query.getMany();
    return result
  }


  findOne(id: number) {
    return `This action returns a #${id} report`;
  }

  update(id: number, updateReportDto: UpdateReportDto) {
    return `This action updates a #${id} report`;
  }

  remove(id: number) {
    return `This action removes a #${id} report`;
  }
}
