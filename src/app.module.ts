import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './api/modules/client/client.module';
import { PartnerModule } from './api/modules/partner/partner.module';
import { ServiceModule } from './api/modules/service/service.module';
import { EstablishmentModule } from './api/modules/establishment/establishment.module';

@Module({
  imports: [ClientModule, PartnerModule, ServiceModule, EstablishmentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
