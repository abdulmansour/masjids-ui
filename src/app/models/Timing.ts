import { Prayer } from './Prayer';
import {LocalDate, LocalTime, ZoneId} from 'js-joda';

export class Timing {
  id: number;
  prayer: Prayer;
  time: LocalTime;
  start: LocalDate;
  end: LocalDate;
  isAtAdhan: boolean;
  delay: number;
}
