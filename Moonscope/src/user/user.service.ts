import { Injectable } from '@nestjs/common';
import { PrismaClient, user } from '@prisma/client';
import { CreateUserDto } from './create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaClient) {}

  async createUser(createUserDto: CreateUserDto): Promise<user> {
    const { username, email, password, birth_date } = createUserDto;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user entity
    const newUser = await this.prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        birth_date: new Date(birth_date),
        sign: this.calulateSign(new Date(birth_date)),
      },
    });

    // Return the created user
    return newUser;
  }

  private calulateSign(birth_date: Date): string {
    const month = birth_date.getMonth() + 1;
    const day = birth_date.getDate();

    let sign = '';

    // Sign calculation logic...
    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
      sign = 'capricorn';
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
      sign = 'aquarius';
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
      sign = 'pisces';
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
      sign = 'aries';
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
      sign = 'taurus';
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
      sign = 'gemini';
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
      sign = 'cancer';
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
      sign = 'leo';
    } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
      sign = 'virgo';
    } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
      sign = 'libra';
    } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
      sign = 'scorpio';
    } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
      sign = 'sagittarius';
    }

    return sign;
  }

  //login
  async login(username: string, password: string): Promise<user> {
    // Find the user with the specified username
    const user = await this.prisma.user.findUnique({ where: { username } });

    // Check if the user exists
    if (!user) {
      throw new Error('User not found');
    }

    // Check if the password is correct
    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      throw new Error('Invalid password');
    }

    // Return the user
    return user;
  }

  async getUsername(username: string): Promise<user> {
    const user = await this.prisma.user.findUnique({ where: { username } });

    // Check if the user exists
    if (!user) {
      throw new Error('User not found');
    }

    // Return the user
    return user;
  }

  async getBirthDate(birth_date: Date): Promise<user[]> {
    const users = await this.prisma.user.findMany({ where: { birth_date } });

    // Check if any users were found
    if (users.length === 0) {
      throw new Error('No users found');
    }

    // Return the users with the specified birth date
    return users;
  }

  async getSign(sign: string): Promise<user[]> {
    const users = await this.prisma.user.findMany({ where: { sign } });

    // Check if any users were found
    if (users.length === 0) {
      throw new Error('No users found');
    }

    // Return the users with the specified sign
    return users;
  }
  async getHoroscope(sign: string): Promise<user[]> {
    const users = await this.prisma.user.findMany({ where: { sign } });

    // Check if the user exists
    if (!users) {
      throw new Error('User not found');
    }

    // Return the user
    return users;
  }
}
