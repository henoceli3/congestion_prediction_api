import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { TrajetsModule } from './trajets/trajets.module';
import { AuthModule } from './auth/auth.module';
import { VoyageModule } from './voyage/voyage.module';

@Module({
  imports: [PrismaModule, UsersModule, TrajetsModule, AuthModule, VoyageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
