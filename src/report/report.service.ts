import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { Report } from './entities/report.entity';

@Injectable()
export class ReportService {


  
  constructor(@InjectRepository(Report) private reportRepo : Repository<Report> , @InjectConnection() private readonly connection: Connection){}

  async create(createReportDto: CreateReportDto) {
    return {
      success : true ,
      data : await this.reportRepo.save(createReportDto)
    }
  }


  async testTransaction(){
    const data = [
      {
        project_id: 1,
        report_template_id: 1,
        report_data: {
          name : 'no'
        } ,
        user_id: 1 ,
        create_at: 'string'
      },
      {
        project_id: 2,
        report_template_id: 2,
        report_data: {
          name : 'no'
        } ,
        user_id: 2 ,
        create_at: 'string'
      },
      {
        project_id: 2,
        report_template_id: 2,
        report_data: {
          name : 'no'
        } ,
        user_id: 2 ,
        create_at: 'string'
      }

    ].map(data => {
      const report = new Report();
      Object.assign(report, data);
      return report;
    })


    const queryRunner = this.connection.createQueryRunner()
    await queryRunner.connect()
    await queryRunner.startTransaction()
    try{
       for (let i = 0 ; i< data.length ; i++){
        // await queryRunner.manager.save(data[i])
        await queryRunner.manager.insert(Report , data[i])
       }
       await queryRunner.commitTransaction()
       return {
         success : true
       }
          
    }
    catch (err){   
      
      await queryRunner.rollbackTransaction()
      return {
        success : false
      }
    }
    finally{
      await queryRunner.release()
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
