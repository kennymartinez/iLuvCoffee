import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @ApiProperty({ description: 'name of coffee' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'name of brand' })
  @IsString()
  readonly brand: string;

  @ApiProperty({ example: ['chocolate', 'vanilla'] })
  @IsString({ each: true })
  readonly flavors: string[];
}
