import { Resolver, Query } from '@nestjs/graphql';
import { CurrentDateTime } from '../models/current-date-time.model';
import { CurrentDateTimeService } from '../services/current-date-time.service';

@Resolver(() => CurrentDateTime)
export class CurrentDateTimeResolver {
  constructor(
    private readonly currentDateTimeService: CurrentDateTimeService,
  ) {}

  @Query(() => CurrentDateTime)
  getCurrentDateTime() {
    return this.currentDateTimeService.getCurrentDateTime();
  }
}
