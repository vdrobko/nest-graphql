import { Module } from '@nestjs/common';
import { CurrentDateTimeService } from './services/current-date-time.service';
import { CurrentDateTimeResolver } from './resolvers/current-date-time.resolver';

@Module({ providers: [CurrentDateTimeService, CurrentDateTimeResolver] })
export class CurrentDateTimeModule {}
