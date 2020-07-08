import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Masjid} from '../../models/Masjid';
import {Timing} from '../../models/Timing';

@Component({
  selector: 'app-masjid',
  templateUrl: './masjid.component.html',
  styleUrls: ['./masjid.component.css']
})
export class MasjidComponent implements OnInit {
  @Input() masjid: Masjid;
  @Output() subscribeEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  subscribe(): void {
    this.subscribeEvent.emit(this.masjid);
  }

}
