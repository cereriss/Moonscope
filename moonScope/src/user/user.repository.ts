import { Injectable } from '@nestjs/common';
import { Connection } from 'mysql2/promise';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(private connection: Connection) {}

  async createUser(user: User): Promise<User> {
    const query =
      'INSERT INTO utenti (username, email, password, birth_date) VALUES (?, ?, ?, ?)';
    const [result] = await this.connection.query(query, [
      user.username,
      user.email,
      user.password,
      user.birth_date,
    ]);
    const createdUserId = result['insertId'];

    return createdUserId;
  }

  async findUserById(id: number): Promise<User | null> {
    const query = 'SELECT * FROM users WHERE id = ?';
    const [rows] = await this.connection.query(query, [id]);
    const user = rows[0];

    if (!user) {
      return null;
    }

    return user;
  }
}
