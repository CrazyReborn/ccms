import { IsDate, IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  assignedTo: string;

  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  location: number[];
}
