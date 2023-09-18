import { Injectable } from '@nestjs/common';
import { PrismaService } from '../utils/prisma.service';
import { CreateServiceDto } from '../modules/service/dto/create-service.dto';
import { UpdateServiceDto } from '../modules/service/dto/update-service.dto';

@Injectable()
export class ServiceRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateServiceDto) {
    return this.prisma.service.create({
      data: {
        ...data,
      },
    });
  }

  async findAll() {
    return await this.prisma.service.findMany();
  }

  async findById(id: string) {
    return await this.prisma.service.findUnique({
      where: {
        id,
      },
    });
  }

  async update(data: UpdateServiceDto) {
    const { id } = data;
    return await this.prisma.service.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.service.delete({
      where: {
        id,
      },
    });
  }
}
