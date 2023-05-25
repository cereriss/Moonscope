import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from './create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, email, password, birth_date } = createUserDto;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user entity
    const newUser = new User();
    newUser.username = username;
    newUser.email = email;
    newUser.password = hashedPassword;
    newUser.birth_date = birth_date;
    newUser.sign = this.calulateSign(birth_date);

    // Save the new user to the database
    const createdUser = await this.userRepository.save(newUser);

    // Return the created user
    return createdUser;
  }

  //assign the sign to the user
  private calulateSign(birth_date: Date): string {
    const month = birth_date.getMonth() + 1;
    const day = birth_date.getDate();

    let sign = '';

    //sign calculation logic
    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
      sign = 'Capricorn';
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
      sign = 'Aquarius';
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
      sign = 'Pisces';
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
      sign = 'Aries';
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
      sign = 'Taurus';
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
      sign = 'Gemini';
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
      sign = 'Cancer';
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
      sign = 'Leo';
    } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
      sign = 'Virgo';
    } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
      sign = 'Libra';
    } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
      sign = 'Scorpio';
    } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
      sign = 'Sagittarius';
    }

    return sign;
  }

  async login(createUserDto: CreateUserDto): Promise<User> {
    const { username, password } = createUserDto;

    // Find the user by email
    const user = await this.userRepository.findOne({ where: { username } });

    // Check if the user exists
    if (!user) {
      throw new Error('User not found');
    }

    // Check if the password is correct
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    // Check if the password is correct
    if (!isPasswordCorrect) {
      throw new Error('Invalid credentials');
    }

    // Return the user
    return user;
  }

  /*async diary(createDiaryDto: CreateDiaryDto): Promise<Diary> {
    const { content } = createDiaryDto;

    // Create a new diary entity
    const newDiary = new Diary();
    newDiary.content = content;

    // Save the new diary to the database
    const createdDiary = await this.diaryRepository.save(newDiary);

    // Return the created diary
    return createdDiary;
  }*/
}
