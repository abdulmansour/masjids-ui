import { Injectable } from '@angular/core';
import {Masjid} from './models/Masjid';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  masjids: Masjid[] = null;
  masjid: Masjid = null;

  constructor() { }

  setMasjids(masjids: Masjid[]): void {
    this.masjids = masjids;
  }

  getMasjid(id: number): Masjid {
    if (this.masjids !== null) {
      this.masjids.forEach((masjid: Masjid) => {
        if (masjid.id === id) {
          this.masjid = masjid;
        }
      });
    }
    return this.masjid;
  }
}
