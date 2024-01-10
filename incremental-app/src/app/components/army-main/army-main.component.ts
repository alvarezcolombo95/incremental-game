import { Component } from '@angular/core';
import { IncrementalMainService } from 'src/app/services/incremental-main.service';

@Component({
  selector: 'app-army-main',
  templateUrl: './army-main.component.html',
  styleUrls: ['./army-main.component.css']
})
export class ArmyMainComponent {

  constructor(private IncrementalMain: IncrementalMainService) {}

  get lockArmy(){
    return this.IncrementalMain.getLockArmyMain();
  }

  buttonUnlockComponent(){
    this.IncrementalMain.unlockArmy()
  }

}
