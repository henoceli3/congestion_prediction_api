import { IsString, IsDate, IsNumber, IsBoolean } from 'class-validator';

export class CreateTrajetDto {
  @IsString()
  voyageId: string;

  @IsBoolean()
  selected: boolean;

  @IsString()
  depart: string;

  @IsString()
  arrivee: string;

  @IsDate()
  date: Date;

  @IsNumber()
  heure: number;

  @IsString()
  jour_semaine: string;

  @IsString()
  type_jour: string;

  @IsString()
  meteo: string;

  @IsString()
  evenement: string;

  @IsNumber()
  nb_voitures: number;

  @IsString()
  commune: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsNumber()
  duree: number;

  @IsNumber()
  distance: number;

  @IsString()
  userId: string;
}
