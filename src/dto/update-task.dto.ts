import { IsOptional } from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  assignedTo: string;

  @IsOptional()
  date: Date;

  @IsOptional()
  location: number[];

  @IsOptional()
  organization: string;

  @IsOptional()
  done: boolean;
}
