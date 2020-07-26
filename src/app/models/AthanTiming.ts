import {Prayer} from './Prayer';

export class AthanTiming {


  constructor(prayer: Prayer, time: string) {
    this.prayer = prayer;
    this.time = time;
  }

  prayer: Prayer;
  time: string;
}
