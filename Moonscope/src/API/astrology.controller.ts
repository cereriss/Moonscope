import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AstrologyService } from './astrology.service';

@Controller('astrology') // http://localhost:3000/astrology
export class AstrologyController {
  constructor(
    private readonly astrologyService: AstrologyService,
    private readonly userService: UserService,
  ) {}

  @Get('horoscope/:username') // http://localhost:3000/astrology/horoscope/:username
  async getHoroscope(@Param('username') username: string) {
    const user = await this.userService.getUsername(username);
    const birthDate = user.birth_date;
    const sign = user.sign;

    const horoscope = await this.astrologyService.getHoroscope(birthDate, sign);

    return horoscope;
  }
}
