import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    return this.prisma.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      where: {
        active: true,
      },
      select: {
        id: true,
        email: true,
        name: true,
        first_name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
        active: true,
      },
      select: {
        id: true,
        email: true,
        name: true,
        first_name: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }

  async findByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: {
        email,
        active: true,
      },
      select: {
        id: true,
        email: true,
        name: true,
        first_name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.findOne(id);

    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }

    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
      select: {
        id: true,
        email: true,
        name: true,
        first_name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.user.update({
      where: { id },
      data: { active: false },
      select: {
        id: true,
        email: true,
        name: true,
        first_name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async changePassword(id: string, changePasswordDto: ChangePasswordDto) {
    const user = await this.prisma.user.findFirst({
      where: { id, active: true },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const isPasswordValid = await bcrypt.compare(
      changePasswordDto.currentPassword,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Current password is incorrect');
    }

    const hashedNewPassword = await bcrypt.hash(
      changePasswordDto.newPassword,
      10,
    );

    return this.prisma.user.update({
      where: { id },
      data: { password: hashedNewPassword },
      select: {
        id: true,
        email: true,
        name: true,
        first_name: true,
        updatedAt: true,
      },
    });
  }
}
