import { PartialType } from '@nestjs/swagger';
import { CreateProjectManagementDto } from './create-project-management.dto';

export class UpdateProjectManagementDto extends PartialType(CreateProjectManagementDto) {}
