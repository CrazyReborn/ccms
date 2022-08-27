import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { User } from '../schemas/user.schema';

export class UpdateColonyDto {
  @ApiProperty({
    description: 'Name of the colony',
  })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Size of the colony',
    example: 12,
  })
  @IsOptional()
  @IsNumber()
  size: number;

  @ApiProperty({
    description: 'Caretakers assigned to the colony',
    example: ['useridone', 'useridtwo'],
  })
  @IsOptional()
  caretakers: User[];

  @ApiProperty({
    description: 'Location of the colony',
    example: [52.1286, 16.7234],
  })
  @IsOptional()
  @IsNumber({}, { each: true })
  location: number[]; //this maybe should have a different type

  @ApiProperty({
    description: "Radius for the colony's location",
    example: 200,
  })
  @IsOptional()
  @IsNumber({}, { each: true })
  radius: number;
}
