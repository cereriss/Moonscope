import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Diary } from '../entities/diary.entity';
import { CreateDiaryDto } from './create-diary.dto';

@Injectable()
export class DiaryService {
  constructor(
    @InjectRepository(Diary)
    private readonly diaryRepository: Repository<Diary>,
  ) {}

  async createDiary(createDiaryDto: CreateDiaryDto): Promise<Diary> {
    const { content } = createDiaryDto;

    const diary = new Diary();
    diary.content = content; // Modifica qui da newDiary a diary

    const createdDiary = await this.diaryRepository.save(diary);

    return createdDiary;
  }
}
