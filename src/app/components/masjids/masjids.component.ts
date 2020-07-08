import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Masjid } from '../../models/Masjid';
import { MasjidService } from '../../services/masjid.service';

@Component({
  selector: 'app-masjids',
  templateUrl: './masjids.component.html',
  styleUrls: ['./masjids.component.css']
})
export class MasjidsComponent implements OnInit {
  filteredMasjids: Masjid[];
  masjids: Masjid[];
  search: string;

  @Output() subscribeEvent = new EventEmitter();

  constructor(private masjidService: MasjidService) { }

  ngOnInit(): void {
    this.masjidService.getMasjids().subscribe(masjids => {
      this.masjids = masjids;
      this.filteredMasjids = masjids;
      // console.log(this.masjids);
    });
  }

  updateMasjids(): void {
    this.filteredMasjids = [];
    // console.log(this.search);
    this.masjids.forEach(function(masjid: Masjid): void {
      if (masjid.name.toLowerCase().includes(this.search.toLowerCase()) ||
        masjid.address.toLowerCase().includes(this.search.toLowerCase())) {
        this.filteredMasjids.push(masjid);
      }
    }, this);
  }

  subscribeMasjid(subscribedMasjid: Masjid): void {
    // console.log(subscribedMasjid);
    this.subscribeEvent.emit(subscribedMasjid);
  }
}
