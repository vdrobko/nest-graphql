import { Module } from '@nestjs/common';
import { CurrentDateTimeModule } from './current-date-time/current-date-time.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { WeatherLocationModule } from './weather-location/weather-location.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CurrentDateTimeModule,
    WeatherLocationModule,
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
  ],
})
export class AppModule {}
