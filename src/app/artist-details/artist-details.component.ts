import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SongkickService } from '../service/songkick.service';
import { Event } from '../models/event.model';
@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {

  events: Event[] = [];
  constructor(
    private route: ActivatedRoute,
    private songKickService: SongkickService,
    private location: Location
  ) { }

  ngOnInit():void {
    this.getEvents();
  }

  getEvents(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.songKickService.getEvents(id)
      .subscribe(events => this.events = events)
  }

}
