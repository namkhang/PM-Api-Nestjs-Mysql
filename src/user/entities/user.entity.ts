import { ProjectManagement } from 'src/project-management/entities/project-management.entity';
import { Report } from 'src/report/entities/report.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  fullname: string;

  @Column()
  password: string;

  @Column()
  is_admin: string;

  @Column({nullable : true})
  create_at: string;


  @OneToMany((type) => ProjectManagement , project => project.userInfor)
  listProject : Array<ProjectManagement>

  

  @OneToMany((type) => Report , report => report.userInfor)
  listReport : Array<Report>


}