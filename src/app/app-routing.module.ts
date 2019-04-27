import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { VenueSearchComponent } from './venue-search/venue-search.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { VenueDetailsComponent } from './venue-details/venue-details.component';
const routes: Routes = [
  { path: '', redirectTo: '/artist/search', pathMatch: 'full'},
  { path: 'artist/search', component: ArtistSearchComponent},
  { path: 'artist/:id', component: ArtistDetailsComponent},
  { path: 'venue/search', component: VenueSearchComponent},
  { path: 'venue/:id', component: VenueDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
