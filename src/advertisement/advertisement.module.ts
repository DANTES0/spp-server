import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AdvertisementController } from './advertisement.controller';
import { AdvertisementService } from './advertisement.service';

@Module({
  controllers: [AdvertisementController],
  providers: [AdvertisementService, PrismaService],
})
export class AdvertisementModule {}
