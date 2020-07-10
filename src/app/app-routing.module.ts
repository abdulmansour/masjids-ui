import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MasjidsComponent} from './components/masjids/masjids.component';
import {MasjidComponent} from './components/masjid/masjid.component';
import {CreateMasjidComponent} from './components/create-masjid/create-masjid.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {MasjidDetailsComponent} from './components/masjid-details/masjid-details.component';

const routes: Routes = [
  {path: '', redirectTo: 'masjids', pathMatch: 'full'},
  {path: 'masjids', component: MasjidsComponent},
  {path: 'masjids/:id', component: MasjidDetailsComponent},
  {path: 'createMasjid', component: CreateMasjidComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

