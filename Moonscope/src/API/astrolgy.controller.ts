import { Controller, Get, Param } from '@nestjs/common';
import { AstrologyService } from '../services/astrology.service';

@Controller('astrology')
export class AstrologyController {
  constructor(private readonly astrologyService: AstrologyService) {}

  @Get('/horoscope/:birthDate/:sign')
  async getHoroscope(
    @Param('birthDate') birthDate: string,
    @Param('sign') sign: string,
  ): Promise<{ prediction: string; love: string; luck: string; work: string }> {
    const parsedDate = new Date(birthDate);
    return this.astrologyService.getHoroscope(parsedDate, sign);
  }
}
