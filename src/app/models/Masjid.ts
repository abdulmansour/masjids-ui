import { Timing } from './Timing';
import {ZoneId} from 'js-joda';

export class Masjid {
  id: number;
  name: string;
  address: string;
  zoneId: ZoneId;
  utcOffset: string;
  timings: Timing[];
}
