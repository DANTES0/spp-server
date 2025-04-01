import { Prisma } from '@prisma/client';

export class CreateAdvDto implements Prisma.AdvertisementCreateInput {
  name: string;
  gender: string;
  age: string;
  adress?: string;
  description?: string;
  image: string[];
  user: Prisma.UserCreateNestedOneWithoutAdvertisementInput;
}
