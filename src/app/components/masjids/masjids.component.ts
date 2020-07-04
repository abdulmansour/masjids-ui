import { Component, OnInit } from '@angular/core';
import { Masjid } from '../../models/Masjid';
import { MasjidService } from '../../services/masjid.service';

@Component({
  selector: 'app-masjids',
  templateUrl: './masjids.component.html',
  styleUrls: ['./masjids.component.css']
})
export class MasjidsComponent implements OnInit {

  masjids: Masjid[];

  constructor(private masjidService: MasjidService) { }

  ngOnInit(): void {
    this.masjidService.getMasjids().subscribe(masjids => {
      this.masjids = masjids;
      console.log(this.masjids);
    });
  }

}
