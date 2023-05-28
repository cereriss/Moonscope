import { Controller, Post, Param } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AstrologyService } from './astrology.service';

@Controller('astrology') // http://localhost:3000/astrology
export class AstrologyController {
  constructor(
    private readonly astrologyService: AstrologyService,
    private readonly userService: UserService,
  ) {}

  @Post('horoscope/:username') // http://localhost:3000/astrology/horoscope/:username
  async getHoroscope(@Param('username') username: string) {
    const user = await this.userService.getUsername(username);

    const sign = user.sign;

    const horoscope = await this.astrologyService.getHoroscope(sign);

    return horoscope;
  }
}
