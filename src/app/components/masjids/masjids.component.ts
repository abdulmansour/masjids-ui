import {Component, OnInit} from '@angular/core';
import { Masjid } from '../../models/Masjid';
import { MasjidService } from '../../services/masjid-service/masjid.service';
import {CookieService} from 'ngx-cookie-service';
import {SessionService} from '../../services/session-service/session.service';

@Component({
  selector: 'app-masjids',
  templateUrl: './masjids.component.html',
  styleUrls: ['./masjids.component.css']
})
export class MasjidsComponent implements OnInit {
  masjids: Masjid[] = [];
  filteredMasjids: Masjid[] = [];
  search: string;
  errorMessage: string;

  constructor(private masjidService: MasjidService, private cookieService: CookieService, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.masjidService.getMasjids().subscribe((masjids) => {
      this.masjids = masjids;
      this.initializeAddress();
      this.sessionService.setMasjids(masjids);
      this.assignSubscriptions();
      this.masjids = this.sortMasjids(this.masjids);
      this.filteredMasjids = this.masjids;
      // console.log(this.masjids);
    },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  updateMasjids(): void {
    this.filteredMasjids = [];
    // console.log(this.search);
    this.masjids.forEach(function(masjid): void {
      if (masjid.name.toLowerCase().includes(this.search.toLowerCase()) ||
        masjid.address.toLowerCase().includes(this.search.toLowerCase())) {
        this.filteredMasjids.push(masjid);
      }
    }, this);
    this.filteredMasjids = this.sortMasjids(this.filteredMasjids);
  }

  sortMasjids(arrMasjids: Masjid[]): Masjid[] {
    // @ts-ignore
    arrMasjids.sort((a, b) => a.subscribed - b.subscribed);
    arrMasjids.reverse();
    return arrMasjids;
  }

  private assignSubscriptions(): void {
    this.masjids.forEach((masjid) => {
      if (this.cookieService.check('masjid-subscription-' + masjid.id)) {
        masjid.subscribed = true;
      }
      else {
        masjid.subscribed = false;
      }
    }, this);
  }

  private initializeAddress(): void {
    this.masjids.forEach((masjid) => {
      masjid.address = masjid.addressLine + ', '
        + masjid.city + ', '
        + masjid.state + ', '
        + masjid.zip + ', '
        + masjid.country;
    }, this);
  }
}
