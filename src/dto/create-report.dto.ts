import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateReportDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  task: string;

  @ApiProperty()
  @IsNotEmpty()
  date: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  filledBy: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  text: string;
}
