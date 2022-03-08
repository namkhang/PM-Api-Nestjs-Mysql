import { Injectable } from '@nestjs/common';
import { InjectRepository , InjectConnection } from '@nestjs/typeorm';
import { Repository , Connection } from 'typeorm';
import { CreateProjectManagementDto } from './dto/create-project-management.dto';
import { UpdateProjectManagementDto } from './dto/update-project-management.dto';
import { ProjectManagement } from './entities/project-management.entity';

@Injectable()
export class ProjectManagementService {


  
  constructor(@InjectRepository(ProjectManagement) private projectRepo : Repository<ProjectManagement> , @InjectConnection() private readonly connection: Connection){}

  async create(createProjectManagementDto: CreateProjectManagementDto) {
    return {
      success : true ,
      data : await this.projectRepo.save({...createProjectManagementDto})
    }
  }

  async findAll() {
    const query = this.projectRepo.createQueryBuilder('project_management')
    .innerJoinAndSelect('project_management.userInfor' , 'id');
    const result = await query.getMany();
    return result
  }

  async findOne(id: number) {
    return {
      success : true ,
      data : await this.projectRepo.findOne({id})
    }

  }

  async search(query : string){
    return {
      success : true ,
      data : await this.connection.query(`SELECT * FROM project_management WHERE project_name LIKE '%${query}%'`)
    }
  }

  async update(id: number, updateProjectManagementDto: UpdateProjectManagementDto) {
    return {
      success : true ,
      data : await this.projectRepo.update({id} , {...updateProjectManagementDto})
    }
  }

  async remove(id: number) {
    await this.projectRepo.delete({id})
    return {
      sucess : true
    }
  }
}
