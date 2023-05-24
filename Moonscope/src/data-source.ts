import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'michelle',
  password: '0987654321',
  database: 'moonscope',
  synchronize: true,
  entities: ['src/**/*.entity{.ts,.js}'],
});
