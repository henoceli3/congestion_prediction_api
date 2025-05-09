import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVoyageDto } from './dto/create-voyage.dto';
import { UpdateVoyageDto } from './dto/update-voyage.dto';

@Injectable()
export class VoyageService {
  constructor(private prisma: PrismaService) {}

  create(createVoyageDto: CreateVoyageDto, userId: string) {
    return this.prisma.voyage.create({
      data: {
        ...createVoyageDto,
        userId,
        date: new Date(createVoyageDto.date),
      },
    });
  }

  findAll() {
    return this.prisma.voyage.findMany({
      include: {
        trajets: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.voyage.findUnique({
      where: { id },
      include: {
        trajets: true,
      },
    });
  }

  update(id: string, updateVoyageDto: UpdateVoyageDto) {
    return this.prisma.voyage.update({
      where: { id },
      data: {
        ...updateVoyageDto,
        date: updateVoyageDto.date ? new Date(updateVoyageDto.date) : undefined,
      },
    });
  }

  remove(id: string) {
    return this.prisma.voyage.delete({
      where: { id },
    });
  }
}
