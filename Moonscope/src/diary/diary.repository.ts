import { Injectable } from '@nestjs/common';
import { Connection } from 'mysql2/promise';
import { Diary } from '../entities/diary.entity';

@Injectable()
export class DiaryRepository {
  constructor(private connection: Connection) {}

  async createDiary(diary: Diary): Promise<Diary> {
    const query = `INSERT INTO diary (content, user_id, date) VALUES (?, ?, NOW())`;
    const [result] = await this.connection.execute(query, [
      diary.content,
      diary.user_id,
    ]);
    const createdDiaryId = result['insertId'];

    return createdDiaryId;
  }
}
