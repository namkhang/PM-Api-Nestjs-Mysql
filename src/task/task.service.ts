import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {

  constructor(@InjectRepository(Task) private readonly taskRepo : Repository<Task>){}

  async create(createTaskDto: CreateTaskDto) {
    return {
      success : true , 
      data : await this.taskRepo.save({...createTaskDto})
    }
  }

  async findAll() {
    return {
      success : true , 
      data : await this.taskRepo.find({
        join : {
          alias : 'task' , 
          innerJoinAndSelect : {
            user : 'task.userInfor' , 
            project : 'task.projectInfor'
          }
        }
      })
    }
  }

  async findOne(id: number) {
    return {
        success : true ,
         data : await this.taskRepo.findOne({id} , {
           join :{
             alias : 'task' , 
             innerJoinAndSelect : {
                  user : 'task.userInfor' , 
                  project : 'task.projectInfor'
             }
           }
         })
    }
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    await this.taskRepo.update({id} , {...updateTaskDto})
    return {
      success : true
    }
  }

  async remove(id: number) {
    await this.taskRepo.delete({id})
    return {
      success : true
    }
  }
}
