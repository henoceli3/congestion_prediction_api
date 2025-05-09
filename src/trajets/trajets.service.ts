import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTrajetDto } from './dto/create-trajet.dto';
import { UpdateTrajetDto } from './dto/update-trajet.dto';

@Injectable()
export class TrajetsService {
  constructor(private prisma: PrismaService) {}

  create(createTrajetDto: CreateTrajetDto, voyageId: string) {
    return this.prisma.trajet.create({
      data: { ...createTrajetDto, voyageId },
    });
  }

  findAll() {
    return this.prisma.trajet.findMany();
  }

  findOne(id: string) {
    return this.prisma.trajet.findUnique({
      where: { id },
    });
  }

  update(id: string, updateTrajetDto: UpdateTrajetDto) {
    return this.prisma.trajet.update({
      where: { id },
      data: updateTrajetDto,
    });
  }

  remove(id: string) {
    return this.prisma.trajet.delete({
      where: { id },
    });
  }
}
