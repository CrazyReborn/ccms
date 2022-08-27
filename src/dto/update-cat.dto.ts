import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Class, Sex } from '../schemas/cat.schema';

export class UpdateCatDto {
  @ApiProperty({
    description: "Cat's name",
    example: 'Snow',
  })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({
    description: "Cat's age in months",
    example: 12,
  })
  @IsOptional()
  @IsNumber()
  age: number;

  @ApiProperty({
    description: "Cat's gender",
    example: 'Female',
  })
  @IsOptional()
  sex: Sex;

  @ApiProperty({
    description: 'Was the cat sterilized?',
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  sterilized: boolean;

  @ApiProperty({
    description: 'Was the cat vaccinated?',
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  vaccinated: boolean;

  @ApiProperty({
    description: 'Is the cat a stray or a feral',
    example: Class.Stray,
  })
  @IsEnum(Class)
  @IsOptional()
  class: Class;

  @ApiProperty({
    description: 'Distinct features of the cat',
    example: ['Left eye is absent', 'Right ear is absent'],
  })
  @IsOptional()
  @IsString({ each: true })
  features: string[];

  @ApiProperty({
    description:
      "Cat's parents (theirs ids), if they were registered in the system",
    example: ['catidone', 'catidtwo'],
  })
  parents: any[];

  @ApiProperty({
    description:
      "Cat's descendants (theirs ids), if they were registered in the system",
    example: ['catidone', 'catidtwo'],
  })
  descendants: any[];
}
