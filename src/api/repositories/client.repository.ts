import { Injectable } from '@nestjs/common';
import { PrismaService } from '../utils/prisma.service';
import { UpdateClientDto } from '../modules/client/dto/update-client.dto';
import { CreatePartnerDto } from '../modules/partner/dto/create-partner.dto';

@Injectable()
export class ClientRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePartnerDto) {
    const client = this.prisma.client.create({
      data: {
        ...data,
      },
    });
    return client;
  }

  async findAll() {
    const clients = await this.prisma.client.findMany();
    return clients;
  }

  async findByEmail(email: string) {
    const client = await this.prisma.client.findUnique({
      where: {
        email,
      },
    });
    return client;
  }

  async findByPhoneNumber(phone: string) {
    const client = await this.prisma.client.findUnique({
      where: {
        phoneNumber: phone,
      },
    });
    return client;
  }

  async findById(id: string) {
    const client = await this.prisma.client.findUnique({
      where: {
        id,
      },
    });
    return client;
  }

  async update(data: UpdateClientDto) {
    const { id } = data;
    const client = await this.prisma.client.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return client;
  }

  async remove(id: string) {
    const client = await this.prisma.client.delete({
      where: {
        id,
      },
    });
    return client;
  }
}
