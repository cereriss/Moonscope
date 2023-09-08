import { Injectable } from '@nestjs/common';
import { PrismaClient, diary } from '@prisma/client';
import { CreateDiaryDto } from './create-diary.dto';

@Injectable()
export class DiaryService {
  constructor(private prisma: PrismaClient) {}

  async createDiary(
    createDiaryDto: CreateDiaryDto,
    userId: number,
  ): Promise<diary> {
    const { content } = createDiaryDto;

    const newDiary = await this.prisma.diary.create({
      data: {
        content: content,
        day: new Date(),
        id_user: +userId,
      },
    });

    return newDiary;
  }

  //get user diaries (plural)
  async getDiariesByUserId(userId: number): Promise<diary[]> {
    const diaries = await this.prisma.diary.findMany({
      where: {
        id_user: +userId,
      },
    });

    return diaries;
  }

  async updateDiary(id: number, content: string): Promise<diary> {
    const updatedDiary = await this.prisma.diary.update({
      where: {
        id_diary: id,
      },
      data: {
        content,
      },
    });

    return updatedDiary;
  }

  async deleteDiary(id: number): Promise<diary> {
    const deletedDiary = await this.prisma.diary.delete({
      where: {
        id_diary: id,
      },
    });

    return deletedDiary;
  }
}
