import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { name, email, password, dateOfBirth } = createUserDto;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user entity
    const newUser = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.password = hashedPassword;
    newUser.dateOfBirth = dateOfBirth;

    // Save the new user to the database
    const createdUser = await this.userRepository.save(newUser);

    // Return the created user
    return createdUser;
  }
}