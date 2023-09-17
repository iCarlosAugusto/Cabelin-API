import { Module } from '@nestjs/common';
import { EstablishmentService } from './establishment.service';
import { EstablishmentController } from './establishment.controller';
import { EstablishmentRepository } from 'src/api/repositories/establishment.repository';
import { PrismaService } from 'src/api/utils/prisma.service';
import { PartnerRepository } from 'src/api/repositories/partner.repository';

@Module({
  controllers: [EstablishmentController],
  providers: [
    EstablishmentService,
    EstablishmentRepository,
    PartnerRepository,
    PrismaService,
  ],
})
export class EstablishmentModule {}
