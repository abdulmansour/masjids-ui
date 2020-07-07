import { Injectable } from '@angular/core';
import { MASJIDS} from '../models/mock-masjids';
import {Masjid} from '../models/Masjid';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasjidService {

  masjidsUrl = 'http://localhost:8000/api/masjids/date/{date}';

  constructor(private http: HttpClient) { }

  getMasjids(): Observable<Masjid[]> {
    this.masjidsUrl = this.getMasjidsByCurrentDateUrlBuilder(this.getCurrentDate());
    return this.http.get<Masjid[]>(this.masjidsUrl);
  }

  getMasjidsByCurrentDateUrlBuilder(date: string): string {
    return 'http://localhost:8000/api/masjids/date/' + date;
  }

  getCurrentDate(): string {
    const date: Date = new Date();
    const year: string = String(date.getFullYear());
    const month: string = String(Number(date.getMonth()) + 1).padStart(2, '0');
    const day: string = String(date.getDate()).padStart(2, '0');

    const currentDate: string = year + '-' + month + '-' + day;

    console.log(currentDate);
    return currentDate;
  }
}
