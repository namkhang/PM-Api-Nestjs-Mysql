import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProjectManagementDto } from './create-project-management.dto';

export class UpdateProjectManagementDto extends PartialType(CreateProjectManagementDto) {
    @ApiProperty({type : String , description : '  customer_name;'})
    customer_name: string;
    @ApiProperty({type : String , description : 'description'})
    description: string;
    @ApiProperty({type : Number , description : 'project_lead_id'})
    project_lead_id: number;
    @ApiProperty({type : String , description : 'project_name'})
    project_name: string;
    @ApiProperty({type : String , description : 'project_lead'})
    project_lead: string;
    @ApiProperty({type : String , description : 'create_at'})
    create_at: string;
    @ApiProperty({type : String , description : 'hcc_project_code'})
    hcc_project_code: string;
    @ApiProperty({type : Number , description : 'total_member'})
    total_member: number;

}