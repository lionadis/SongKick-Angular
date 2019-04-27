import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistSearchComponent } from './artist-search/artist-search.component';
import { HttpClientModule } from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { VenueSearchComponent } from './venue-search/venue-search.component';
import { VenueDetailsComponent } from './venue-details/venue-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistSearchComponent,
    MessagesComponent,
    ArtistDetailsComponent,
    VenueSearchComponent,
    VenueDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
