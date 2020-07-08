import { Timing } from './Timing';

export class Masjid {
  id: number;
  name: string;
  address: string;
  zoneId: string;
  utcOffset: string;
  timings: Timing[];
}
