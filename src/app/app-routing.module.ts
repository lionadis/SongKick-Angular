import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
const routes: Routes = [
  { path: '', redirectTo: '/artist/search', pathMatch: 'full'},
  { path: 'artist/search', component: ArtistSearchComponent},
  { path: 'artist/:id', component: ArtistDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
