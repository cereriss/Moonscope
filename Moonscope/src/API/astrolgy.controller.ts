import { Controller, Get, Param } from '@nestjs/common';
import { AstrologyService } from '../services/astrology.service';

@Controller('astrology')
export class AstrologyController {
  constructor(private readonly astrologyService: AstrologyService) {}

  @Get('/horoscope/:birthDate')
  async getHoroscope(@Param('birthDate') birthDate: string): Promise<string> {
    const parsedDate = new Date(birthDate);
    const horoscope = await this.astrologyService.getHoroscope(parsedDate);
    return horoscope;
    aa;
  }
}
