import { Component, OnInit, Input } from '@angular/core';
import {Masjid} from '../../models/Masjid';
import {Timing} from '../../models/Timing';

@Component({
  selector: 'app-masjid',
  templateUrl: './masjid.component.html',
  styleUrls: ['./masjid.component.css']
})
export class MasjidComponent implements OnInit {
  @Input() masjid: Masjid;

  constructor() { }

  ngOnInit(): void {
  }

}
