import axios from 'axios';
import { Aztro } from 'aztro-js';

export class AstrologyService {
  private aztro: Aztro;

  constructor() {
    this.aztro = new Aztro();
  }

  async getHoroscope(
    birthDate: Date,
    sign: string,
  ): Promise<{ prediction: string; love: string; luck: string; work: string }> {
    const formattedDate = birthDate.toISOString().split('T')[0];

    // Make a request to the Aztro API
    const response = await axios.get(
      `https://aztro.sameerkumar.website/?date=${formattedDate}&sign=${sign}`,
    );
    // Return the horoscope prediction
    return {
      prediction: response.data.description,
      love: response.data.love,
      luck: response.data.luck,
      work: response.data.work,
    };
  }
}
