import {Component, OnInit, Input} from '@angular/core';
import {Masjid} from '../../models/Masjid';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-masjid',
  templateUrl: './masjid.component.html',
  styleUrls: ['./masjid.component.css']
})
export class MasjidComponent implements OnInit {
  @Input() masjid: Masjid;

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    if (this.cookieService.check('masjid-subscription-' + this.masjid.id)) {
      this.masjid.subscribed = true;
    }
    else {
      this.masjid.subscribed = false;
    }
  }

  subscribe(): void {
    this.masjid.subscribed = !this.masjid.subscribed;
    this.cookieService.set('masjid-subscription-' + this.masjid.id, String(this.masjid.id));
  }

  unsubscribe(): void {
    this.masjid.subscribed = !this.masjid.subscribed;
    this.cookieService.delete('masjid-subscription-' + this.masjid.id);
  }

}
