import { ApiProperty } from "@nestjs/swagger";



export class CreateReportDto {
    @ApiProperty({type : Number , description : 'project_id'})
    project_id: number;
    @ApiProperty({type : Number , description : 'description'})
    report_template_id: number;
    @ApiProperty({type : Object , description : 'report_data'})
    report_data: any 
    @ApiProperty({type : Number , description : 'user_id'})
    user_id: number;
    @ApiProperty({type : String , description : 'creatorID'})
    create_at: string;
}
