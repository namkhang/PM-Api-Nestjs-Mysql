import { Module } from '@nestjs/common';
import { ProjectManagementService } from './project-management.service';
import { ProjectManagementController } from './project-management.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectManagement } from './entities/project-management.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectManagement])],
  controllers: [ProjectManagementController],
  providers: [ProjectManagementService]
})
export class ProjectManagementModule {}
