import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TracksService } from 'src/app/services/tracks.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit {

  loggedInUserId: number | null | undefined;
  trackId: number | undefined;
  track: any;

  constructor(
    private tracksService: TracksService,
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.loggedInUserId = this.sharedService.getLoggedInUserId();

    this.route.params.subscribe(params => {
      this.trackId = +params['id'];
    });

    this.tracksService.getTracks().subscribe(tracks => {
      this.track = tracks.filter(track => track.id == this.trackId);
    });
  }

}
