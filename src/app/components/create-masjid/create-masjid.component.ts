import { Component, OnInit } from '@angular/core';
import { Timezones } from '../../models/Timezones';
import { Countries } from '../../models/Countries';
import {Masjid} from '../../models/Masjid';
import {CreateMasjidService} from '../../services/create-masjid/create-masjid.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-create-masjid',
  templateUrl: './create-masjid.component.html',
  styleUrls: ['./create-masjid.component.css']
})
export class CreateMasjidComponent implements OnInit {

  timezones: string[];
  countries: string[];

  masjid: Masjid;
  countryHasError = true;
  timezoneHasError = true;
  submitted = false;
  private arrayBuffer: string | ArrayBuffer;
  private file: any;
  private filelist: any[];

  constructor(private createMasjidService: CreateMasjidService, private router: Router) { }

  ngOnInit(): void {
    this.timezones = Timezones.TIMEZONES;
    this.countries = Countries.COUNTRIES;
    this.masjid = new Masjid('', '', '', '', '', '', '', '', 0, 0, '', '', '', null);
  }

  validateCountry(value: any): void {
    if (value === 'default') {
      this.countryHasError = true;
    }
    else {
      this.countryHasError = false;
    }
  }

  validateTimezone(value: any): void {
    if (value === 'default') {
      this.timezoneHasError = true;
    }
    else {
      this.timezoneHasError = false;
    }
  }

  onSubmit(): void {
    this.submitted = true;
    console.log('Request:', this.masjid);
    this.createMasjidService.createMasjid(this.masjid)
      .subscribe(
        data => console.log('Response:', data),
        error => console.log('Error:', error)
      );
    this.router.navigate(['/masjids']);
  }

  addfile(event): void {
    this.file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(this.file);
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      // @ts-ignore
      const data = new Uint8Array(this.arrayBuffer);
      const arr = new Array();
      for (let i = 0; i !== data.length; ++i) { arr[i] = String.fromCharCode(data[i]); }
      const bstr = arr.join('');
      const workbook = XLSX.read(bstr, {type: 'binary'});
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      console.log(XLSX.utils.sheet_to_json(worksheet, {raw: true}));
      const arraylist = XLSX.utils.sheet_to_json(worksheet, {raw: true});
      this.filelist = [];
      console.log(this.filelist);
    };
  }
}
