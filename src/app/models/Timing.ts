import { Prayer } from './Prayer';

export class Timing {
  id: number;
  prayer: Prayer;
  time: string;
  start: string;
  end: string;
  isAtAdhan: boolean;
  delay: number;
}
