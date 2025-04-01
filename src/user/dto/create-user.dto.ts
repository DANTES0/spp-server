import { Prisma } from '@prisma/client';

export class CreateUserDto implements Prisma.UserCreateInput {
  firstname: string;
  lastname?: string;
  mail: string;
  password: string;
  description?: string;
  profile_photo?: string;
}
