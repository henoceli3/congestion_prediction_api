import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateTrajetDto {
  @IsString()
  @IsNotEmpty()
  depart: string;

  @IsString()
  @IsNotEmpty()
  arrivee: string;

  @IsNumber()
  @IsNotEmpty()
  distance: number;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
