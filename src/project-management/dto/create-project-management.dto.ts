import { ApiProperty } from "@nestjs/swagger";

export class CreateProjectManagementDto {
    @ApiProperty({type : String , description : 'projectName'})
    projectName: string;
    @ApiProperty({type : String , description : 'mentorID'})
    mentorID: string;
    @ApiProperty({type : String , description : 'mentorName'})
    mentorName: string;
    @ApiProperty({type : String , description : 'createAt'})
    createAt: string;
    @ApiProperty({type : String , description : 'creatorID'})
    creatorID: string;
    @ApiProperty({type : String , description : 'creatorName'})
    creatorName: string;
    @ApiProperty({type : String , description : 'description'})
    description: string;
    @ApiProperty({type : String , description : 'status'})
    status: string;
}
