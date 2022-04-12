import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
    @ApiProperty({type : String , description : '  customer_name;'})
    task_name: string;
    @ApiProperty({type : String , description : 'description'})
    description: string;
    @ApiProperty({type : String , description : 'createAt'})
    createAt: string;
    @ApiProperty({type : String , description : 'estimate_time'})
    estimate_time: string;
    @ApiProperty({type : Number , description : 'user_id'})
    user_id: number;
    @ApiProperty({type : Number , description : 'project_id'})
    project_id: number
}