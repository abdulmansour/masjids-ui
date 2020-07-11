import {Timing} from './Timing';

export class Athan {
  data: {
    date: {
      readable: string
    }
    timings: {
      Fajr: string,
      Sunrise: string,
      Dhuhr: string,
      Asr: string,
      Sunset: string,
      Maghrib: string,
      Isha: string,
      Imsak: string,
      Midnight: string
    },
    meta: {
      timezone: string
    }
  };
  timings: Timing[];
}
