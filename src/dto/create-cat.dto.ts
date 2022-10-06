import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Class, Sex } from '../schemas/cat.schema';
import { Colony } from '../schemas/colony.schema';

export class CreateCatDto {
  @ApiProperty({
    description: "Cat's name",
    example: 'Snow',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: "Cat's age in months",
    example: 12,
  })
  @IsNotEmpty()
  @IsNumber()
  age: number;

  @ApiProperty({
    description: "Cat's gender",
    example: 'Female',
  })
  @IsNotEmpty()
  sex: Sex;

  @ApiProperty({
    description: 'Was the cat sterilized?',
    example: true,
  })
  @IsNotEmpty()
  @IsBoolean()
  sterilized: boolean;

  @ApiProperty({
    description: 'Was the cat vaccinated?',
    example: true,
  })
  @IsNotEmpty()
  @IsBoolean()
  vaccinated: boolean;

  @ApiProperty({
    description: 'Is the cat a stray or a feral',
    example: Class.Stray,
  })
  @IsEnum(Class)
  @IsNotEmpty()
  class: Class;

  @ApiProperty({
    description: 'Distinct features of the cat',
    example: ['Left eye is absent', 'Right ear is absent'],
  })
  @IsNotEmpty()
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

  @ApiProperty()
  colony: Colony;
}
