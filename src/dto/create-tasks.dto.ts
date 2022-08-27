import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({
    description: 'Name of the task',
    example: 'John',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'User that should complete the task',
    example: 'useroneid',
  })
  @IsOptional()
  assignedTo: string | null;

  @ApiProperty({
    description: 'Date',
    example: '2022-08-19T22:00:00.000+00:00',
  })
  @IsNotEmpty()
  date: Date;

  @ApiProperty({
    description: 'Description of the task',
    example: 'Feed cats from colony "John"',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Location of the task',
    example: [51, -0.09],
  })
  @IsNotEmpty()
  @IsNumber({}, { each: true })
  location: number[];
}
