import axios from 'axios';
import { Aztro } from 'aztro-js';

export class AstrologyService {
  private aztro: Aztro;

  constructor() {
    this.aztro = new Aztro();
  }

  async getHoroscope(birthDate: Date): Promise<string> {
    // Format the birth date to YYYY-MM-DD
    const formattedDate = birthDate.toISOString().split('T')[0];

    // Make a request to the Aztro API
    const response = await axios.get(
      `https://aztro.sameerkumar.website/?date=${formattedDate}&sign=aries`,
    );

    // Return the horoscope prediction
    return response.data.description;
  }
}
