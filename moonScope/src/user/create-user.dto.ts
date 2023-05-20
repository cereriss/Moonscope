import { IsString, IsEmail, IsDate } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsDate()
  readonly birth_date: Date;
}
