import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './api/modules/client/client.module';
import { PartnerModule } from './api/modules/partner/partner.module';

@Module({
  imports: [ClientModule, PartnerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
