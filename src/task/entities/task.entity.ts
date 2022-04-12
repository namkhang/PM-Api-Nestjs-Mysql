import { ProjectManagement } from "src/project-management/entities/project-management.entity";
import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('task')
export class Task {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    task_name: string;
  
    @Column()
    description: string;
  
    @Column()
    createAt: string;
  
  
    @Column({nullable : true})
    estimate_time: string;

    @Column()
    user_id : number

    
    @Column()
    project_id : number
    
  
  
    @ManyToOne((type) => User , users => users.id)
    @JoinColumn({ name: 'user_id'})
    userInfor : User

    @ManyToOne((type) => ProjectManagement , project => project.id)
    @JoinColumn({ name: 'project_id'})
    projectInfor : ProjectManagement
}
