import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateColonyDto {
  @ApiProperty({
    description: 'Name of the colony',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Size of the colony',
    example: 12,
  })
  @IsNotEmpty()
  @IsNumber()
  size: number;

  @ApiProperty({
    description: 'Caretakers assigned to the colony',
    example: ['useridone', 'useridtwo'],
  })
  @IsOptional()
  caretakers: string[];

  @ApiProperty({
    description: 'Location of the colony',
    example: [52.1286, 16.7234],
  })
  @IsNotEmpty()
  @IsNumber({}, { each: true })
  location: number[]; //this maybe should have a different type

  @ApiProperty({
    description: "Radius for the colony's location",
    example: 200,
  })
  @IsNotEmpty()
  @IsNumber({}, { each: true })
  radius: number;
}
