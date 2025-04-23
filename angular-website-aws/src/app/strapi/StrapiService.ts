import { Injectable } from '@angular/core';
import Strapi from 'strapi-sdk-js';

@Injectable({
  providedIn: 'root'
})
export class StrapiService {
  private strapi = new Strapi({
    url: 'http://localhost:1337', // deine Strapi URL
  });

  async getData() {
    try {
      const response = await this.strapi.find('articles');
      console.log("Davor")
      console.log(response.data)
      console.log("Danach")
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
}
