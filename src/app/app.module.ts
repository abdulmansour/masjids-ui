import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MasjidsComponent } from './components/masjids/masjids.component';
import { TimingComponent } from './components/timing/timing.component';
import { TimingsComponent } from './components/timings/timings.component';
import {FormsModule} from '@angular/forms';
import { SearchMasjidComponent } from './components/search-masjid/search-masjid.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {CookieService} from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { CreateMasjidComponent } from './components/create-masjid/create-masjid.component';
import {MasjidComponent} from './components/masjid/masjid.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MasjidDetailsComponent } from './components/masjid-details/masjid-details.component';
import { AthanComponent } from './components/athan/athan.component';

@NgModule({
  declarations: [
    AppComponent,
    MasjidsComponent,
    MasjidComponent,
    TimingComponent,
    TimingsComponent,
    SearchMasjidComponent,
    NavbarComponent,
    CreateMasjidComponent,
    PageNotFoundComponent,
    MasjidDetailsComponent,
    AthanComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
