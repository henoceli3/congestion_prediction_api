import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
} from '@nestjs/common';
import { TrajetsService } from './trajets.service';
import { CreateTrajetDto } from './dto/create-trajet.dto';
import { UpdateTrajetDto } from './dto/update-trajet.dto';

@Controller('trajets')
export class TrajetsController {
  constructor(private readonly trajetsService: TrajetsService) {}

  @Post('create')
  create(@Request() req, @Body() createTrajetDto: CreateTrajetDto) {
    return this.trajetsService.create(createTrajetDto, req.user.userId);
  }

  @Get('get-all')
  findAll() {
    return this.trajetsService.findAll();
  }

  @Get('get-one/:id')
  findOne(@Param('id') id: string) {
    return this.trajetsService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateTrajetDto: UpdateTrajetDto) {
    return this.trajetsService.update(id, updateTrajetDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.trajetsService.remove(id);
  }
}
