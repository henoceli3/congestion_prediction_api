import { IsDateString, IsString } from 'class-validator';

export class CreateVoyageDto {
  @IsString()
  depart: string;

  @IsString()
  arrivee: string;

  @IsDateString()
  date: string;
}
