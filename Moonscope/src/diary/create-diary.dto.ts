import { IsString, IsEmail, IsDate } from 'class-validator';

export class CreateDiaryDto {
  @IsString()
  readonly content: string;

  @IsEmail()
  readonly email: string;

  @IsDate()
  readonly date: Date;
}
