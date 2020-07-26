import {Component, OnInit, Input} from '@angular/core';
import {Masjid} from '../../models/Masjid';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-masjid',
  templateUrl: './masjid.component.html',
  styleUrls: ['./masjid.component.css']
})
export class MasjidComponent implements OnInit {
  @Input() masjid: Masjid;
  mapsSearch: string;

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    if (this.masjid !== null) {
      if (this.cookieService.check('masjid-subscription-' + this.masjid.id)) {
        this.masjid.subscribed = true;
      } else {
        this.masjid.subscribed = false;
      }
    }

    this.mapsSearch = 'https://www.google.com/maps/search/' + this.masjid.address;
  }

  subscribe(): void {
    this.masjid.subscribed = !this.masjid.subscribed;
    this.cookieService.set('masjid-subscription-' + this.masjid.id, String(this.masjid.id) + ' ' + this.masjid.name, 36500);
  }

  unsubscribe(): void {
    this.masjid.subscribed = !this.masjid.subscribed;
    this.cookieService.delete('masjid-subscription-' + this.masjid.id);
  }

  onSelect(masjid: Masjid): void {
    this.router.navigate(['/masjids', masjid.id]);
  }

}
