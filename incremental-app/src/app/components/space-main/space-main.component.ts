import { Component } from '@angular/core';
import { IncrementalMainService } from 'src/app/services/incremental-main.service';

@Component({
  selector: 'app-space-main',
  templateUrl: './space-main.component.html',
  styleUrls: ['./space-main.component.css']
})
export class SpaceMainComponent {

  constructor(private IncrementalMain: IncrementalMainService) {}

  get lockSpace(){
    return this.IncrementalMain.getLockSpaceMain();
  }

  buttonUnlockComponent(){
    this.IncrementalMain.unlockSpace()
  }

}
