import { Module } from '@nestjs/common';
import { WeatherLocationService } from './services/weather-location.service';
import { WeatherLocationResolver } from './resolvers/weather-location.resolver';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { LocationGeoResolver } from './resolvers/location-geo.resolver';

@Module({
  providers: [
    WeatherLocationService,
    WeatherLocationResolver,
    LocationGeoResolver,
  ],
  imports: [ConfigModule, HttpModule],
})
export class WeatherLocationModule {}
