import { Resolver, Query, Root, ResolveField, Args } from '@nestjs/graphql';
import { Weather } from '../models/weather.model';
import { WeatherLocationService } from '../services/weather-location.service';
import { LocationGeo } from '../models/location-geo.model';

@Resolver(() => LocationGeo)
export class LocationGeoResolver {
  constructor(
    private readonly weatherLocationService: WeatherLocationService,
  ) {}

  @Query(() => LocationGeo)
  async getGeoLocation(@Args('city') city: string): Promise<LocationGeo> {
    return await this.weatherLocationService.getCityLocation(city);
  }

  @ResolveField(() => Weather, { nullable: true })
  async weather(@Root() location: LocationGeo): Promise<Weather> {
    return await this.weatherLocationService.getWeatherByGeoData(location);
  }
}
