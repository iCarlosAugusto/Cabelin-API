import { Injectable } from '@nestjs/common';
import { PrismaService } from '../utils/prisma.service';
import { CreatePartnerDto } from '../modules/partner/dto/create-partner.dto';
import { UpdatePartnerDto } from '../modules/partner/dto/update-partner.dto';

@Injectable()
export class PartnerRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePartnerDto) {
    const partner = this.prisma.partner.create({
      data: {
        ...data,
      },
    });
    return partner;
  }

  async findAll() {
    const partners = await this.prisma.client.findMany();
    return partners;
  }

  async findByEmail(email: string) {
    const partner = await this.prisma.partner.findUnique({
      where: {
        email,
      },
    });
    return partner;
  }

  async findByPhoneNumber(phone: string) {
    const partner = await this.prisma.partner.findUnique({
      where: {
        phoneNumber: phone,
      },
    });
    return partner;
  }

  async findById(id: string) {
    const partner = await this.prisma.partner.findUnique({
      where: {
        id,
      },
    });
    return partner;
  }

  async update(data: UpdatePartnerDto) {
    const { id } = data;
    const partner = await this.prisma.partner.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return partner;
  }

  async remove(id: string) {
    const partner = await this.prisma.partner.delete({
      where: {
        id,
      },
    });
    return partner;
  }
}
