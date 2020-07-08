import {Component, Input, OnInit} from '@angular/core';
import {Timing} from '../../models/Timing';
import {Prayer} from '../../models/Prayer';

@Component({
  selector: 'app-timing',
  templateUrl: './timing.component.html',
  styleUrls: ['./timing.component.css']
})
export class TimingComponent implements OnInit {

  @Input() timing: Timing;

  isDark: boolean;
  timingClasses = {};

  constructor() {}

  ngOnInit(): void {
    this.setIsTimingDark();
  }

  setIsTimingDark(): void {
    this.isDark = this.timing.prayer === Prayer.Fajr;
    this.timingClasses = {
      'timing-day': !this.isDark,
      'timing-dark': this.isDark
    };
  }

}
