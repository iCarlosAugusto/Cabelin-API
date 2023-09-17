import { IsString, IsNotEmpty, IsUUID, IsOptional } from 'class-validator';

export class UpdateClientDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  id: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @IsString()
  @IsOptional()
  password?: string;
}
