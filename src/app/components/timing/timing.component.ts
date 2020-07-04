import { Component, OnInit, Input } from '@angular/core';
import {Timing} from '../../models/Timing';

@Component({
  selector: 'app-timing',
  templateUrl: './timing.component.html',
  styleUrls: ['./timing.component.css']
})
export class TimingComponent implements OnInit {
  @Input() timing: Timing;

  constructor() { }

  ngOnInit(): void {
  }

}
