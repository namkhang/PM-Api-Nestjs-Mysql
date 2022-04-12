import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProjectManagementModule } from './project-management/project-management.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportModule } from './report/report.module';
import { ReportTemplateModule } from './report-template/report-template.module';
import { TaskModule } from './task/task.module';
import ORMConfig from '../ormconfig'

// {
//   type: 'mysql',
//   host: 'localhost',
//   port: 3306,
//   username: 'root',
//   password: 'password',
//   database: 'hitachi_vantara_report',
//   entities: ["dist/**/entities/*.entity{.ts,.js}"],
//   synchronize : true
// }
@Module({
  imports: [ 
    TypeOrmModule.forRoot(ORMConfig)
    
    ,
    UserModule, ProjectManagementModule, ReportModule, ReportTemplateModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
