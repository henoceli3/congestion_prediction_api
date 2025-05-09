import { Module } from '@nestjs/common';
import { TrajetsService } from './trajets.service';
import { TrajetsController } from './trajets.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [TrajetsController],
  providers: [TrajetsService, PrismaService],
})
export class TrajetsModule {}
