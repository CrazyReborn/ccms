import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto {
  @ApiProperty({
    description: 'Name of the task',
    example: 'Feed cats from colony "John"',
  })
  @IsOptional()
  assignedTo: string;

  @ApiProperty({
    description: 'User that should complete the task',
    example: 'useroneid',
  })
  @IsOptional()
  date: number;

  @ApiProperty({
    description: 'Date',
    example: '2022-08-19T22:00:00.000+00:00',
  })
  @IsOptional()
  location: number[];

  @ApiProperty({
    description: 'Description of the task',
    example: 'Feed cats from colony "John"',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Was the task completed',
    example: true,
  })
  @IsOptional()
  done: boolean;
}
