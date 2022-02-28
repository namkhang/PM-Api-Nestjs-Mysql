import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProjectManagementDto } from './dto/create-project-management.dto';
import { UpdateProjectManagementDto } from './dto/update-project-management.dto';
import { ProjectManagement } from './entities/project-management.entity';

@Injectable()
export class ProjectManagementService {


  
  constructor(@InjectRepository(ProjectManagement) private projectRepo : Repository<ProjectManagement>){}

  create(createProjectManagementDto: CreateProjectManagementDto) {
    return 'This action adds a new projectManagement';
  }

  async findAll() {
    const query = this.projectRepo.createQueryBuilder('project_management')
    .innerJoinAndSelect('project_management.userInfor' , 'id');
    const result = await query.getMany();
    return result
  }

  findOne(id: number) {
    return `This action returns a #${id} projectManagement`;
  }

  update(id: number, updateProjectManagementDto: UpdateProjectManagementDto) {
    return `This action updates a #${id} projectManagement`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectManagement`;
  }
}
