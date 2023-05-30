import { Injectable } from '@nestjs/common';
import { Connection } from 'mysql2/promise';
import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(private connection: Connection) {}

  async createUser(user: User): Promise<User> {
    const query =
      'INSERT INTO user (username, email, password, birth_date, sign) VALUES (?, ?, ?, ?, ?)';
    const [result] = await this.connection.query(query, [
      user.username,
      user.email,
      user.password,
      user.birth_date,
      user.sign,
    ]);
    const createdUserId = result['insertId'];

    return createdUserId;
  }

  async findUserByUsername(username: string): Promise<User | null> {
    const query = 'SELECT * FROM users WHERE username = ?';
    const [rows] = await this.connection.query(query, [username]);
    const user = rows[0];

    if (!user) {
      return null;
    }

    return user;
  }
}
