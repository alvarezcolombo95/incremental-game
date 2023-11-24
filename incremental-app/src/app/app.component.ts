import { Component, HostListener } from '@angular/core';
import { IncrementalMainService } from './services/incremental-main.service';
import { SaveServiceService } from './services/save-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'incremental-app';

  constructor(private IncrementalMain: IncrementalMainService, private saveService: SaveServiceService) {}

  //this saves on refresh or tab close
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    this.saveService.saveGameState(this.IncrementalMain.getStats());
    console.log("The game was saved!")
  }

}



