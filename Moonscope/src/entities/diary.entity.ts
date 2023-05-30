import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Diary {
  @PrimaryGeneratedColumn()
  id_diary: number;

  @Column()
  content: string;

  @Column()
  id_user: number;
}
