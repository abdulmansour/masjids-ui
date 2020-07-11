import {Component, Input, OnInit} from '@angular/core';
import {Timing} from '../../models/Timing';
import * as moment from 'moment';
import 'moment-timezone';
import {MasjidService} from '../../services/masjid-service/masjid.service';

@Component({
  selector: 'app-timing',
  templateUrl: './timing.component.html',
  styleUrls: ['./timing.component.css']
})
export class TimingComponent implements OnInit {

  @Input() timing: Timing;
  @Input() zoneId: string;

  isDark: boolean;
  timingClasses = {};
  formattedTime: string;

  constructor(private masjidService: MasjidService) {}

  ngOnInit(): void {
    this.setIsTimingDark();
    if (this.timing.isAthan) {
      this.formatAthanTime();
    }
    else {
      this.formatTime();

    }
  }

  setIsTimingDark(): void {
    // this.isDark = this.timing.prayer === Prayer.Fajr;
    this.timingClasses = {
      'timing-day': !this.isDark,
      'timing-dark': this.isDark
    };
  }

  formatTime(): void {
    const currentDate = this.masjidService.getCurrentDate();
    // console.log(currentDate);

    const date = currentDate + 'T' + this.timing.time + 'Z';
    // console.log(date);

    const m = moment(date);
    // console.log(m);

    this.formattedTime = m.tz(this.zoneId).format('hh:mm A z');
    // console.log(this.formattedTime);
  }

  formatAthanTime(): void {
    this.formattedTime = this.timing.time;
  }

}
