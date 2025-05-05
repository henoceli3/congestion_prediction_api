import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ParamIdDto } from './dto/param-id.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('get-one/:id')
  findOne(@Param() params: ParamIdDto) {
    return this.usersService.findOne(params.id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('update/:id')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  update(@Param() params: ParamIdDto, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(params.id, updateUserDto);
  }

  @Patch('change-password/:id')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  changePassword(
    @Param() params: ParamIdDto,
    @Body() changePasswordDto: ChangePasswordDto,
  ) {
    return this.usersService.changePassword(params.id, changePasswordDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('delete:id')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )
  remove(@Param() params: ParamIdDto) {
    return this.usersService.remove(params.id);
  }
}
