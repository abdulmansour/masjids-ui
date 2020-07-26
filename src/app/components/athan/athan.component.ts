import {Component, OnInit} from '@angular/core';
import {AthanService} from '../../services/athan-service/athan.service';
import {Athan} from '../../models/Athan';
import {Timing} from '../../models/Timing';
import {Prayer} from '../../models/Prayer';
import {AthanTiming} from '../../models/AthanTiming';

@Component({
  selector: 'app-athan',
  templateUrl: './athan.component.html',
  styleUrls: ['./athan.component.css']
})
export class AthanComponent implements OnInit {

  athan: Athan;
  athanTimings: AthanTiming[] = [];
  zoneId: string;
  date: string;

  latitude: number;
  longitude: number;
  accuracy: number;

  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  constructor(private athanService: AthanService) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((pos) => {
      const crd = pos.coords;

      this.latitude = crd.latitude;
      this.longitude = crd.longitude;
      this.accuracy = crd.accuracy;

      console.log('Your current position is:');
      console.log(`Latitude : ${this.latitude}`);
      console.log(`Longitude: ${this.longitude}`);
      console.log(`More or less ${this.accuracy} meters.`);

      // call athan api to fetch athan based on current date and geolocation
      this.athanService.getCurrentAthanTimings(this.latitude, this.longitude, 2).subscribe((athan) => {
        this.athan = athan;
        console.log(this.athan);

        this.athanTimings.push(new AthanTiming(Prayer.Fajr, this.athan.data.timings.Fajr),
          new AthanTiming(Prayer.Dhuhr, this.athan.data.timings.Dhuhr),
          new AthanTiming(Prayer.Asr, this.athan.data.timings.Asr),
          new AthanTiming(Prayer.Maghrib, this.athan.data.timings.Maghrib),
          new AthanTiming(Prayer.Isha, this.athan.data.timings.Isha),
          );

        this.zoneId = this.athan.data.meta.timezone;
        this.date = this.athan.data.date.readable;
      });
    }, (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }, this.options);

  }

}
