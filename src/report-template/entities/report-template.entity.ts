import { Report } from 'src/report/entities/report.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';

@Entity('report_template')
export class ReportTemplate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  field: string;

  @Column()
  report_name: string;


  @Column({nullable : true})
  create_at: string;


  @Column()
  description: string;



  @OneToMany((type) => Report , report => report.reportTemplateInfor)
  listReport : Array<Report>


}
