import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { ServiceRepository } from 'src/api/repositories/service.repository';
import { PrismaService } from 'src/api/utils/prisma.service';

@Module({
  controllers: [ServiceController],
  providers: [ServiceService, ServiceRepository, PrismaService],
})
export class ServiceModule {}
