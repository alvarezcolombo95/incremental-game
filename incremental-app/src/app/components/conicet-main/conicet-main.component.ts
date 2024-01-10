import { Component } from '@angular/core';
import { IncrementalMainService } from 'src/app/services/incremental-main.service';

@Component({
  selector: 'app-conicet-main',
  templateUrl: './conicet-main.component.html',
  styleUrls: ['./conicet-main.component.css']
})
export class ConicetMainComponent {

  constructor(private IncrementalMain: IncrementalMainService) {}

  get lockConicet(){
    return this.IncrementalMain.getLockConicetMain();
  }

  buttonUnlockComponent(){
    this.IncrementalMain.unlockConicet()
  }

}
