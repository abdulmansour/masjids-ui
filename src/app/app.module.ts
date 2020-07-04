import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MasjidsComponent } from './components/masjids/masjids.component';
import { MasjidComponent } from './components/masjid/masjid.component';
import { TimingComponent } from './components/timing/timing.component';
import { TimingsComponent } from './components/timings/timings.component';

@NgModule({
  declarations: [
    AppComponent,
    MasjidsComponent,
    MasjidComponent,
    TimingComponent,
    TimingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
