import { Injectable } from '@angular/core';
import { MASJIDS} from '../models/mock-masjids';
import {Masjid} from '../models/Masjid';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasjidService {

  masjidsUrl = 'http://localhost:8000/api/masjids';

  constructor(private http: HttpClient) { }

  getMasjids(): Observable<Masjid[]> {
    return this.http.get<Masjid[]>(this.masjidsUrl);
  }
}
