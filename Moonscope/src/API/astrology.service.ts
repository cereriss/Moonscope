import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AstrologyService {
  async getHoroscope(
    //birthDate: Date,
    sign: string,
  ): Promise<{ horoscope: string }> {
    //const formattedDate = birthDate.toISOString().split('T')[0];

    // Make a request to the astrology API
    const response = await axios
      .get(`https://ohmanda.com/api/horoscope/${sign}`)
      .then((response) => {
        return {
          horoscope: response.data.horoscope,
        };
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        throw new Error('Failed to fetch horoscope.');
      });
    return response;
  }
}
