import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { VoyageService } from './voyage.service';
import { CreateVoyageDto } from './dto/create-voyage.dto';
import { UpdateVoyageDto } from './dto/update-voyage.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('voyage')
@UseGuards(JwtAuthGuard)
export class VoyageController {
  constructor(private readonly voyageService: VoyageService) {}

  @Post('create')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  create(@Request() req, @Body() createVoyageDto: CreateVoyageDto) {
    return this.voyageService.create(createVoyageDto, req.user.userId);
  }

  @Get('all')
  findAll() {
    return this.voyageService.findAll();
  }

  @Get('get-one/:id')
  findOne(@Param('id') id: string) {
    return this.voyageService.findOne(id);
  }

  @Patch('update/:id')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  update(@Param('id') id: string, @Body() updateVoyageDto: UpdateVoyageDto) {
    return this.voyageService.update(id, updateVoyageDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.voyageService.remove(id);
  }
}
