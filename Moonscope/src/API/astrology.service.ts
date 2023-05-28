import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AstrologyService {
  async getHoroscope(
    birthDate: Date,
    sign: string,
  ): Promise<{ prediction: string; love: string; luck: string; work: string }> {
    const formattedDate = birthDate.toISOString().split('T')[0];

    try {
      // Make a request to the astrology API
      const response = await axios.get(
        `https://https://aztro.sameerkumar.website/?sign=${sign}&date=${formattedDate}`,
      );

      // Return the horoscope prediction
      return {
        prediction: response.data.prediction,
        love: response.data.love,
        luck: response.data.luck,
        work: response.data.work,
      };
    } catch (error) {
      // Handle any errors that occurred during the request
      throw new Error('Failed to fetch horoscope.');
    }
  }
}
