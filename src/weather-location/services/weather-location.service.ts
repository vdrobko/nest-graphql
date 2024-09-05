import { Injectable } from '@nestjs/common';
import { Weather } from '../models/weather.model';
import { HttpService } from '@nestjs/axios';
import { LocationGeo } from '../models/location-geo.model';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';

@Injectable({})
export class WeatherLocationService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getWeatherByCity(city: string): Promise<Weather> {
    try {
      const cityLocation: LocationGeo = await this.getCityLocation(city);
      return await this.getWeatherByGeoData(cityLocation);
    } catch (error) {
      throw error;
    }
  }

  async getCityLocation(city: string): Promise<LocationGeo> {
    try {
      const apiKey = this.configService.get<string>('OPEN_WEATHER_API_KEY');
      const response: AxiosResponse = await this.httpService.axiosRef.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURI(city)}&limit=1&appid=${apiKey}`,
      );
      if (response.status === 200 && typeof response.data[0] == 'object') {
        return {
          latitude: response.data[0].lat,
          longitude: response.data[0].lon,
        };
      } else {
        throw new Error(`City ${city} is not found`);
      }
    } catch (error) {
      throw error;
    }
  }

  async getWeatherByGeoData(cityLocation: LocationGeo): Promise<Weather> {
    try {
      const apiKey = this.configService.get<string>('OPEN_WEATHER_API_KEY');
      const response: AxiosResponse = await this.httpService.axiosRef.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cityLocation.latitude}&lon=${cityLocation.longitude}&appid=${apiKey}&units=metric`,
      );
      if (response.status === 200 && response.data) {
        return {
          description: response.data.weather[0].description,
          temp: response.data.main.temp,
          max_temp: response.data.main.temp_max,
          min_temp: response.data.main.temp_min,
          feels_like: response.data.main.feels_like,
        };
      } else return response.data;
    } catch (error) {
      console.log('Error fetching Weather Data', error);
      throw error;
    }
  }
}
