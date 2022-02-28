import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProjectManagementModule } from './project-management/project-management.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportModule } from './report/report.module';
import { ReportTemplateModule } from './report-template/report-template.module';

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'locked1641999',
      database: 'hitachi_vantara_report',
      entities: ["dist/**/entities/*.entity{.ts,.js}"],
      synchronize: true,
    })
    
    ,
    UserModule, ProjectManagementModule, ReportModule, ReportTemplateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
