import { Injectable } from '@nestjs/common';
import { Connection } from 'mysql2/promise';
import { Diary } from '../entities/diary.entity';

@Injectable()
export class DiaryRepository {
  constructor(private connection: Connection) {}

  async createDiary(diary: Diary): Promise<Diary> {
    const query = `INSERT INTO diary (content, id_user, date) VALUES (?, ?, NOW())`;
    const [result] = await this.connection.execute(query, [
      diary.content,
      diary.id_user,
    ]);
    const createdDiaryId = result['insertId'];

    return createdDiaryId;
  }
}
