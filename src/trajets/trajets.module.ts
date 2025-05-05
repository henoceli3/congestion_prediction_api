import { Module } from '@nestjs/common';
import { TrajetsService } from './trajets.service';
import { TrajetsController } from './trajets.controller';

@Module({
  controllers: [TrajetsController],
  providers: [TrajetsService],
})
export class TrajetsModule {}
