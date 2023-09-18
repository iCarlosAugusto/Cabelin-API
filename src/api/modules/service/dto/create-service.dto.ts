import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateServiceDto {
  @IsString()
  @IsNotEmpty()
  establishemntId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  price: string;

  @IsString()
  @IsNotEmpty()
  duration: string;

  @IsString()
  @IsOptional()
  description: string;
}
