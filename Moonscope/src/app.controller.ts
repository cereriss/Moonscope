import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index') // Render the index.html file
  getLandingPage() {}

  @Get('register')
  @Render('register') // Render the registration page
  getRegisterPage() {}

  @Get('login')
  @Render('login') // Render the login page
  getLoginPage() {}

  @Get('profile')
  @Render('profile') // Render the profile page
  getProfilePage() {}

  @Get('registered')
  @Render('registered') // Render the registered page
  getRegisteredPage() {}

  @Get('diary')
  @Render('diary') // Render the diary page
  getDiaryPage() {}
}
