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

    // Save the new user to the database
    const createdUser = await this.userRepository.save(newUser);

    // Return the created user
    return createdUser;
  }

  async login(createUserDto: CreateUserDto): Promise<User> {
    const { email, password } = createUserDto;

    // Find the user by email
    const user = await this.userRepository.findOne({ where: { email } });

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
}
