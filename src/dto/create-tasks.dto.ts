import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  assignedTo: string;

  @IsNotEmpty()
  @IsNumber()
  date: number;

  @IsNotEmpty()
  location: number[];
}
