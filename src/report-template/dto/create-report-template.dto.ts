import { ApiProperty } from "@nestjs/swagger";

export class CreateReportTemplateDto {
    @ApiProperty({type : String , description : 'createAt'})
    create_at: string;
    @ApiProperty({type : String , description : 'description'})
    description: string;
    @ApiProperty({type : Array , description : 'field'})
    field: Array<String>;
    @ApiProperty({type : String , description : 'reportTemplateName'})
    report_name: string;
}
