import { Body, Controller, Post, Res } from '@nestjs/common';
import { DiaryService } from './diary.service';
import { Response } from 'express';
import { CreateDiaryDto } from './create-diary.dto';

@Controller('diary')
export class DiaryController {
    constructor(private readonly diaryService: DiaryService) {}

    @Post('new')
    async createDiary(@Body() createDiaryDto: CreateDiaryDto, @Res() res: Response) {
        await this.diaryService.createDiary(createDiaryDto);  // Modifica qui
        res.redirect('../profile.html');
    }
}
