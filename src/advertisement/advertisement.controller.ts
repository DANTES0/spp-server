import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AdvertisementService } from './advertisement.service';
import { CreateAdvDto } from './dto/create-adv.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { multerConfig } from 'src/config/multer-config';

@Controller('advertisement')
export class AdvertisementController {
  constructor(private readonly advertisementService: AdvertisementService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'image', maxCount: 5 }], multerConfig)
  )
  create(
    @UploadedFiles() files: { image: Express.Multer.File[] },
    @Body() data: CreateAdvDto
  ) {
    const imagePaths = files.image?.map((file) => file.path) || [];
    const dataWithImages = { ...data, image: imagePaths };
    return this.advertisementService.createAdv(dataWithImages);
  }
  @Get()
  findAll() {
    return this.advertisementService.findAll();
  }
}
