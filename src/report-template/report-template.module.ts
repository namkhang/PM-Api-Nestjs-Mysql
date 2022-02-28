import { Module } from '@nestjs/common';
import { ReportTemplateService } from './report-template.service';
import { ReportTemplateController } from './report-template.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportTemplate } from './entities/report-template.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReportTemplate])],
  controllers: [ReportTemplateController],
  providers: [ReportTemplateService]
})
export class ReportTemplateModule {}
