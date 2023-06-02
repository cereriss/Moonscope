import { Module } from '@nestjs/common';
import { DiaryController } from './diary.controller';
import { DiaryService } from './diary.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [DiaryController],
  providers: [DiaryService, PrismaClient],
  exports: [DiaryService],
})
export class DiaryModule {}
