import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Diary {
  @PrimaryGeneratedColumn()
  id_diary: number;

  @Column()
  content: string;

  @Column()
  id_user: number;
}
