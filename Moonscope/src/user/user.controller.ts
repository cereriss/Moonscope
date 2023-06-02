import { Controller, Post, Body, Res } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('users') // http://localhost:3000/users
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('new') // http://localhost:3000/users/new
  async createUser(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    await this.userService.createUser(createUserDto);
    res.redirect('../registered.html');
  }

  @Post('login') // http://localhost:3000/users/login
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
    @Res() res: Response,
  ) {
    await this.userService.login(username, password);
    res.redirect(`../profile.html?username=${encodeURIComponent(username)}`);
  }
}
