import { ProjectManagement } from 'src/project-management/entities/project-management.entity';
import { ReportTemplate } from 'src/report-template/entities/report-template.entity';
import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';



@Entity('report')
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  project_id: number;

  @Column()
  report_template_id: number;

  @Column({type : 'json' , nullable : true})
  report_data: any;

  @Column()
  user_id: number;

  @Column({nullable : true})
  create_at: string;

  @ManyToOne((type) => ProjectManagement)
  @JoinColumn({ name: 'project_id' , referencedColumnName : 'id'})
  projectInfor : ProjectManagement

  
  @ManyToOne((type) => User)
  @JoinColumn({ name: 'user_id' , referencedColumnName : 'id'})
  userInfor : User

  @ManyToOne((type) => ReportTemplate)
  @JoinColumn({ name: 'report_template_id' , referencedColumnName : 'id'})
  reportTemplateInfor : ReportTemplate


}
