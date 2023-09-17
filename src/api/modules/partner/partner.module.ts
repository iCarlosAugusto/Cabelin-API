import { Module } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { PartnerController } from './partner.controller';
import { PrismaService } from 'src/api/utils/prisma.service';
import { PartnerRepository } from 'src/api/repositories/partner.repository';

@Module({
  controllers: [PartnerController],
  providers: [PartnerService, PrismaService, PartnerRepository],
})
export class PartnerModule {}
