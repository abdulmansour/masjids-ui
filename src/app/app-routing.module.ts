import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MasjidsComponent} from './components/masjids/masjids.component';
import {MasjidComponent} from './components/masjid/masjid.component';
import {CreateMasjidComponent} from './components/create-masjid/create-masjid.component';

const routes: Routes = [
  {path: '', redirectTo: 'masjids', pathMatch: 'full'},
  {path: 'masjids', component: MasjidsComponent},
  {path: 'masjid', component: MasjidComponent},
  {path: 'createMasjid', component: CreateMasjidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

