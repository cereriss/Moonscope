import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AstrologyService {
  async getHoroscope(
    s: string,
  ): Promise<{ about: string; compatibility: string }> {
    const rapidApiKey = process.env.RAPIDAPI_KEY;

    if (!rapidApiKey) {
      throw new Error('RapidAPI key is missing.');
    }

    try {
      console.log('Sending request to API with sign:', s); // Aggiunto questo log
      const response = await axios.get(
        `https://horoscope-astrology.p.rapidapi.com/sign?s=${s}`,
        {
          headers: {
            'X-RapidAPI-Key': rapidApiKey,
            'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com',
          },
        },
      );

      return {
        about: response.data.about,
        compatibility: response.data.compatibility,
      };
    } catch (error) {
      if (error.response) {
        console.error('Response Error:', error.response.status);
      } else {
        console.error('Request Error:', error.message);
      }

      throw new Error('Failed to fetch horoscope.');
    }
  }
}
