import { Injectable } from '@nestjs/common';
import { DateTime as LuxonDateTime } from 'luxon';
import { CurrentDateTime } from '../models/current-date-time.model';

@Injectable({})
export class CurrentDateTimeService {
  getCurrentDateTime(): CurrentDateTime {
    const now = LuxonDateTime.now();
    return {
      date: now.toISODate(),
      time: now.toFormat('HH:mm:ss'),
    };
  }
}
