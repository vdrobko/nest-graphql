import { Resolver, Query, Args } from '@nestjs/graphql';
import { Weather } from '../models/weather.model';
import { WeatherLocationService } from '../services/weather-location.service';

@Resolver(() => Weather)
export class WeatherLocationResolver {
  constructor(
    private readonly weatherLocationService: WeatherLocationService,
  ) {}

  @Query(() => Weather)
  async getWeatherByCity(@Args('city') city: string): Promise<Weather> {
    return await this.weatherLocationService.getWeatherByCity(city);
  }
}
