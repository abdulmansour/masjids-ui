import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MasjidsComponent } from './components/masjids/masjids.component';
import { MasjidComponent } from './components/masjid/masjid.component';
import { TimingComponent } from './components/timing/timing.component';
import { TimingsComponent } from './components/timings/timings.component';
import {FormsModule} from '@angular/forms';
import { SearchMasjidComponent } from './components/search-masjid/search-masjid.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    MasjidsComponent,
    MasjidComponent,
    TimingComponent,
    TimingsComponent,
    SearchMasjidComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
