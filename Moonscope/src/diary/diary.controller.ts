import { Body, Controller, Get, Post, Res } from '@nestjs/common';
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

  //fetch diary of the user
  @Get(':username')
  async getDiariesByUsername(
    @Body('id_user') userId: number,
    @Res() res: Response,
  ) {
    try {
      // Fetch diaries data based on the provided user ID
      const diariesData = await this.diaryService.getDiariesByUserId(userId);

      // Return the diaries data as a JSON response
      res.json({ diaries: diariesData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
