import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('users') //http://localhost:3000/users
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('new') //http://localhost:3000/users/new
  async createUser(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    await this.userService.createUser(createUserDto);
    res.redirect('./public/login.html');
  }


  //login
  @Post('login') //http://localhost:3000/users/login
  async login(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    await this.userService.login(createUserDto);
    // Redirect to the desired HTML page
    res.redirect('./public/profile.html');

  //diary
  @Post('diary') //http://localhost:3000/users/diary
  
}
