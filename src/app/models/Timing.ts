import { Prayer } from './Prayer';

export class Timing {

  constructor(prayer: Prayer, time: string, isAthan: boolean) {
    this.prayer = prayer;
    this.time = time;
    this.isAthan = isAthan;
  }

  id: number;
  prayer: Prayer;
  time: string;
  start: string;
  end: string;
  isAtAdhan: boolean;
  delay: number;
  isAthan: boolean;
}
