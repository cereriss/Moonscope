import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
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
  async getDiaryByUsername(
    @Param('username') username: string,
    @Res() res: Response,
  ) {
    try {
      // Fetch diaries data based on the provided username
      const diariesData = await this.diaryService.getDiariesByUsername(
        username,
      );

      // Return the diaries data as a JSON response
      res.json({ diary: diariesData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
