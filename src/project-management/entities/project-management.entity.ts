import { User } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';

@Entity('project_management')
export class ProjectManagement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customer_name: string;

  @Column()
  description: string;

  @Column()
  project_lead_id: number;

  @Column()
  project_name: string;

  @Column()
  project_lead: string;

  @Column({nullable : true})
  create_at: string;


  @Column()
  hcc_project_code: string;

  @Column()
  total_member : number



  @ManyToOne((type) => User , user => user.id)
  @JoinColumn({ name: 'project_lead_id'})
  userInfor : User


}