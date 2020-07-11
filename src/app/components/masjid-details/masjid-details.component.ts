import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasjidService } from '../../services/masjid-service/masjid.service';
import { Masjid } from '../../models/Masjid';
import {SessionService} from '../../services/session-service/session.service';

@Component({
  selector: 'app-masjid-details',
  templateUrl: './masjid-details.component.html',
  styleUrls: ['./masjid-details.component.css']
})
export class MasjidDetailsComponent implements OnInit {

  masjid: Masjid = null;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private masjidService: MasjidService, private sessionService: SessionService) { }

  ngOnInit(): void {
    // tslint:disable-next-line:radix
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this.masjid = this.sessionService.getMasjid(id);
    console.log('Fetched masjid from sessionService');
    console.log(this.masjid);
    if (this.masjid === null) {
      this.masjidService.getMasjid(id).subscribe((masjid: Masjid) => {
          this.masjid = masjid;
          console.log('Fetched masjid from masjidService');
          console.log(this.masjid);
        },
        (error) => {
          this.errorMessage = error;
        });
    }
  }
}
