import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Masjid} from '../../models/Masjid';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateMasjidService {

  url = 'http://localhost:8000/api/masjids';

  constructor(private http: HttpClient) { }

  createMasjid(masjid: Masjid): Observable<Masjid> {
    return this.http.post<Masjid>(this.url, masjid);
  }
}
