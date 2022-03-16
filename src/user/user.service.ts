import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {


  constructor(@InjectRepository(User) private userRepo : Repository<User> , @InjectConnection() private readonly connection: Connection){}


  async create(createUserDto: CreateUserDto) {
    return {
      success : true ,
      data : await this.userRepo.save({...createUserDto})
    }
  }

  async sort(field : string , type : string){
    const order = {}
    order[field] = type
    return {
      success : true,
      data : await this.userRepo.find({
          order
      })
    }
  }



  async searchUser(query :string){
    // let data  = await this.connection.query(`SELECT * FROM user WHERE fullname LIKE '%${query}%'`)
    let data  = await this.userRepo.createQueryBuilder('user').where(`user.fullname like '%${query}%'`).select('user.fullname').addSelect('user.username').addSelect('user.is_admin').getMany()
               
      return {
        success : true ,
        data 
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
          select  : ['id' , 'fullname' , 'username'],
          where : {
            is_admin : 1
          }
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
