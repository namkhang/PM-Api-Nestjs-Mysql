import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('Task')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('/create-task')
  @ApiOkResponse({description : 'Created'})
  @ApiBody({type : CreateTaskDto})
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get('/find-all-task')
  findAll() {
    return this.taskService.findAll();
  }

  @Get('/detail-task/:id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }

  @Patch('/update-task/:id')
  @ApiOkResponse({description : 'Updated'})
  @ApiBody({type : UpdateTaskDto})
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }

  @Delete('/delete-task/:id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
