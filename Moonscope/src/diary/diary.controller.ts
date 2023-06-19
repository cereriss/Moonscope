import { Body, Controller, Post, Res } from '@nestjs/common';
import { DiaryService } from './diary.service';
import { Response } from 'express';
import { CreateDiaryDto } from './create-diary.dto';

@Controller('diary')
export class DiaryController {
  constructor(private readonly diaryService: DiaryService) {}

  @Post('new')
  async createDiary(
    @Body() createDiaryDto: CreateDiaryDto,
    @Body('id_user') userId: number,
    @Res() res: Response,
  ) {
    await this.diaryService.createDiary(createDiaryDto, userId);
    res.redirect('../profile.html');
  }
}
