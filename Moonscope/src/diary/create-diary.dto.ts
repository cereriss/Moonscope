import { IsString, IsEmail, IsDate, MaxLength } from 'class-validator';

export class CreateDiaryDto {
  @IsString()
  @MaxLength(500)
  readonly content: string;

  @IsEmail()
  readonly email: string;

  @IsDate()
  readonly date: Date;
}
