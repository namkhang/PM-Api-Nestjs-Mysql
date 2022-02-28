import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {


  constructor(@InjectRepository(User) private userRepo : Repository<User>){}


  async create(createUserDto: CreateUserDto) {
    return {
      success : true ,
      data : await this.userRepo.save({...createUserDto})
    }
  }

  async findAll() {
    const query = this.userRepo.createQueryBuilder('user')
    .innerJoinAndSelect('user.listProject' , 'project_lead_id');
    const result = await query.getMany();
    return result
  }

  async find(){
      return {
        success: true ,
        data : await this.userRepo.find({
          select  : ['id' , 'fullname' , 'username']
        })
      }
  }
  

  async findOne(id: number) {
    return {
      success : true ,
      data : await this.userRepo.findOne({id})
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    let data = await this.userRepo.update({id}, {...updateUserDto})
    return {
      success : true ,
      data
    }
  }

  async remove(id: number) {
    await this.userRepo.delete({id})
    return {
      success : true
    }
  }
}
