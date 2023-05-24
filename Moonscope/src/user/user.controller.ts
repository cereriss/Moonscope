import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UserService } from './user.service';

@Controller('users') //http://localhost:3000/users
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('new')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }


  //login
  @Post('login')
  login(@Body() createUserDto: CreateUserDto) {
    return this.userService.login(createUserDto);
  }


}
