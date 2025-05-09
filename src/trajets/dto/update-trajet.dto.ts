import { PartialType } from '@nestjs/mapped-types';
import { CreateTrajetDto } from './create-trajet.dto';

export class UpdateTrajetDto extends PartialType(CreateTrajetDto) {}
