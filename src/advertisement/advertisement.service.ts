import { Injectable } from '@nestjs/common';
import { Advertisement, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AdvertisementService {
  constructor(private readonly prisma: PrismaService) {}

  async createAdv(
    data: Prisma.AdvertisementCreateInput
  ): Promise<Advertisement> {
    return await this.prisma.advertisement.create({ data });
  }

  async findAll(params?: {
    take?: number;
    orderBy?: Prisma.AdvertisementOrderByWithRelationInput;
  }): Promise<Advertisement[]> {
    return await this.prisma.advertisement.findMany({
      ...params,
      include: { user: true },
    });
  }
}
