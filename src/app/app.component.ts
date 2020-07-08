import { Component } from '@angular/core';
import {Masjid} from './models/Masjid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'masjids-app';
  isAdmin = true;
  location = 'Montreal';
  subscribedMasjids: Masjid[] = [];

  appendToSubscribedMasjids(subscribedMasjid: Masjid): void {
    // console.log(subscribedMasjid);
    if (!this.subscribedMasjids.includes(subscribedMasjid)) {
      this.subscribedMasjids.push(subscribedMasjid);
    }
  }
}



