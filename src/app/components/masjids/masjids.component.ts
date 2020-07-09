import {Component, OnInit} from '@angular/core';
import { Masjid } from '../../models/Masjid';
import { MasjidService } from '../../services/masjid.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-masjids',
  templateUrl: './masjids.component.html',
  styleUrls: ['./masjids.component.css']
})
export class MasjidsComponent implements OnInit {
  masjids: Masjid[] = [];
  filteredMasjids: Masjid[] = [];
  sortedMasjids: Masjid[] = [];

  search: string;

  constructor(private masjidService: MasjidService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.masjidService.getMasjids().subscribe(masjids => {
      this.masjids = masjids;
      this.filteredMasjids = this.sortMasjids(this.masjids);
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
    this.filteredMasjids = this.sortMasjids(this.filteredMasjids);
  }

  sortMasjids(arrMasjids: Masjid[]): Masjid[] {
    this.sortedMasjids = [];
    const cookies: { [p: string]: string } = this.cookieService.getAll();
    const subscriptions: number[] = [];
    const tempMasjids = Object.assign([], arrMasjids);

    for (const [key, value] of Object.entries(cookies)) {
      if (key.includes('masjid-subscription')) {
        subscriptions.push(Number(value));
      }
    }

    subscriptions.forEach((id: number) => {
      for (let i = tempMasjids.length - 1; i >= 0; i--) {
        if (tempMasjids[i].id === id) {
          this.sortedMasjids.push(tempMasjids[i]);
          tempMasjids.splice(i, 1);
        }
      }
    }, this);

    // console.log(this.sortedMasjids);
    this.sortedMasjids = this.sortedMasjids.concat(tempMasjids);
    return this.sortedMasjids;
  }
}
