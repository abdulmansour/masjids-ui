import { Component, OnInit } from '@angular/core';
import { Timezones } from '../../models/Timezones';
import { Countries } from '../../models/Countries';
import {Masjid} from '../../models/Masjid';

@Component({
  selector: 'app-create-masjid',
  templateUrl: './create-masjid.component.html',
  styleUrls: ['./create-masjid.component.css']
})
export class CreateMasjidComponent implements OnInit {

  timezones: string[];
  countries: string[];

  masjid: Masjid;

  constructor() { }

  ngOnInit(): void {
    this.timezones = Timezones.TIMEZONES;
    this.countries = Countries.COUNTRIES;
    this.masjid = new Masjid('', '', '', '', '', '', '', '', 0, 0, '', '', '', null);
  }

}
