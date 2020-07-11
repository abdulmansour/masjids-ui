import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Athan} from '../../models/Athan';

@Injectable({
  providedIn: 'root'
})
export class AthanService {

  athanTimingsUrl = 'http://api.aladhan.com/v1/timings/{date}?latitude={latitude}&longitude={longitude}&method={method}';

  constructor(private http: HttpClient) { }

  // specification of api call: https://aladhan.com/prayer-times-api#GetCurrentDate #11: Timings
  getCurrentAthanTimings(latitude: number, longitude: number, method: number): Observable<Athan> {
    this.athanTimingsUrl = this.athanTimingsUrl.split('{date}').join(this.getCurrentDate())
      .split('{latitude}').join(`${latitude}`)
      .split('{longitude}').join(`${longitude}`)
      .split('{method}').join(`${method}`);

    console.log(this.athanTimingsUrl);

    return this.http.get<Athan>(this.athanTimingsUrl).pipe(catchError(this.errorHandler));
  }

  public getCurrentDate(): string {
    const date: Date = new Date();
    const year: string = String(date.getFullYear());
    const month: string = String(Number(date.getMonth()) + 1).padStart(2, '0');
    const day: string = String(date.getDate()).padStart(2, '0');

    const currentDate: string = day + '-' + month + '-' + year;

    // console.log(currentDate);
    return currentDate;
  }

  // tslint:disable-next-line:typedef
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error!');
  }
}


