import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { PrismaService } from 'src/api/utils/prisma.service';
import { ClientRepository } from 'src/api/repositories/client.repository';

@Module({
  controllers: [ClientController],
  providers: [ClientService, PrismaService, ClientRepository],
})
export class ClientModule {}
