import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({type : String , description : 'username'})
    username: string;
    @ApiProperty({type : String , description : 'fullname'})
    fullname: string;
    @ApiProperty({type : String , description : 'password'})
    password: string;
    @ApiProperty({type : String , description : 'is_admin'})
    is_admin: string;
    @ApiProperty({type : String , description : 'create_at'})
    create_at: string;

}