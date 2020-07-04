import { Masjid } from './Masjid';
import { Prayer } from './Prayer';

export const MASJIDS: Masjid[] = [
  {
    id: 1,
    name: 'Masjid Makkah-Al-Mukkaramah',
    address: '11900 Boul Gouin O, Pierrefonds, QC H8Z 1V6',
    timings: [
      {
        id: 1,
        prayer: Prayer.Fajr,
        time: '04:30:00',
        start: '2020-07-01',
        end: '2020-08-01',
        isAtAdhan: false,
        delay: null
      },
      {
        id: 2,
        prayer: Prayer.Dhuhr,
        time: '13:15:00',
        start: '2020-07-01',
        end: '2020-08-01',
        isAtAdhan: false,
        delay: null
      },
      {
        id: 3,
        prayer: Prayer.Asr,
        time: '17:30:00',
        start: '2020-07-01',
        end: '2020-08-01',
        isAtAdhan: false,
        delay: null
      },
      {
        id: 4,
        prayer: Prayer.Maghrib,
        time: '21:30:00',
        start: '2020-07-01',
        end: '2020-08-01',
        isAtAdhan: false,
        delay: null
      },
      {
        id: 5,
        prayer: Prayer.Isha,
        time: '23:00:00',
        start: '2020-07-01',
        end: '2020-08-01',
        isAtAdhan: false,
        delay: null
      },
      {
        id: 6,
        prayer: Prayer.Jumuaa,
        time: '13:15:00',
        start: '2020-07-01',
        end: '2020-08-01',
        isAtAdhan: false,
        delay: null
      }
    ]
  },
  {
    id: 2,
    name: 'Masjid Al Huda',
    address: '9540 Boul Gouin O, Pierrefonds, QC H8Y 2B1',
    timings: [
      {
        id: 7,
        prayer: Prayer.Fajr,
        time: '04:30:00',
        start: '2020-07-01',
        end: '2020-08-01',
        isAtAdhan: false,
        delay: null
      },
      {
        id: 8,
        prayer: Prayer.Dhuhr,
        time: '13:15:00',
        start: '2020-07-01',
        end: '2020-08-01',
        isAtAdhan: false,
        delay: null
      },
      {
        id: 9,
        prayer: Prayer.Asr,
        time: '17:30:00',
        start: '2020-07-01',
        end: '2020-08-01',
        isAtAdhan: false,
        delay: null
      },
      {
        id: 10,
        prayer: Prayer.Maghrib,
        time: '21:30:00',
        start: '2020-07-01',
        end: '2020-08-01',
        isAtAdhan: false,
        delay: null
      },
      {
        id: 11,
        prayer: Prayer.Isha,
        time: '23:00:00',
        start: '2020-07-01',
        end: '2020-08-01',
        isAtAdhan: false,
        delay: null
      },
      {
        id: 12,
        prayer: Prayer.Jumuaa,
        time: '13:15:00',
        start: '2020-07-01',
        end: '2020-08-01',
        isAtAdhan: false,
        delay: null
      }
    ]
  }
];
