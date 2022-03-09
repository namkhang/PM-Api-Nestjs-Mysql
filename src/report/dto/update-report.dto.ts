import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateReportDto } from './create-report.dto';

export class UpdateReportDto extends PartialType(CreateReportDto) {
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
