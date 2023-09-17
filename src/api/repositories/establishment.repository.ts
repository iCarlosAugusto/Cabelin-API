import { Injectable } from '@nestjs/common';
import { PrismaService } from '../utils/prisma.service';
import { CreateEstablishmentDto } from '../modules/establishment/dto/create-establishment.dto';
import { UpdateEstablishmentDto } from '../modules/establishment/dto/update-establishment.dto';

@Injectable()
export class EstablishmentRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateEstablishmentDto) {
    return this.prisma.establishment.create({
      data: {
        ...data,
      },
    });
  }

  async findAll() {
    return await this.prisma.establishment.findMany();
  }

  async findById(id: string) {
    return await this.prisma.establishment.findUnique({
      where: {
        id,
      },
    });
  }

  async update(data: UpdateEstablishmentDto) {
    const { id } = data;
    return await this.prisma.establishment.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.establishment.delete({
      where: {
        id,
      },
    });
  }
}
