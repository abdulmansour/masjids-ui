import { Injectable } from '@angular/core';
import {Masjid} from '../models/Masjid';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MasjidService {

  masjidsUrl = 'http://localhost:8000/api/masjids/date/{date}';

  constructor(private http: HttpClient) { }

  getMasjids(): Observable<Masjid[]> {
    this.masjidsUrl = this.getMasjidsByCurrentDateUrlBuilder(this.getCurrentDate());
    return this.http.get<Masjid[]>(this.masjidsUrl).pipe(catchError(this.errorHandler));
  }

  getMasjidsByCurrentDateUrlBuilder(date: string): string {
    return 'http://localhost:8000/api/masjids/date/' + date;
  }

  public getCurrentDate(): string {
    const date: Date = new Date();
    const year: string = String(date.getFullYear());
    const month: string = String(Number(date.getMonth()) + 1).padStart(2, '0');
    const day: string = String(date.getDate()).padStart(2, '0');

    const currentDate: string = year + '-' + month + '-' + day;

    // console.log(currentDate);
    return currentDate;
  }

  // tslint:disable-next-line:typedef
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error!');
  }
}
