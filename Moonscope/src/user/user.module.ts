import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: PrismaClient,
      useClass: PrismaClient,
    },
    UserService,
  ],
  exports: [UserService],
})
export class UserModule {}
