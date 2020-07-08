import { Component, OnInit, Input } from '@angular/core';
import {Timing} from '../../models/Timing';

@Component({
  selector: 'app-timings',
  templateUrl: './timings.component.html',
  styleUrls: ['./timings.component.css']
})
export class TimingsComponent implements OnInit {

  @Input() timings: Timing[];
  @Input() zoneId: string;
  constructor() { }

  ngOnInit(): void {
  }

}
