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

  get scientist(){
    return this.IncrementalMain.getScientist()
  }

  get sciencePoints(){
    return this.IncrementalMain.getSciencePoints()
  }

  get scientistCost(){
    return this.IncrementalMain.getScientistCost()
  }

  get scientistCostRounded(){
    return this.IncrementalMain.getScientistCost().toFixed(2)
  }

  get sciencePointsRounded(){
    return Math.floor(this.IncrementalMain.getSciencePoints()) 
  }

  buttonUnlockComponent(){
    this.IncrementalMain.unlockConicet()
  }

  buttonAddWorker(){
    this.IncrementalMain.addWorker()
  }

  allowAddWorker(){
    let enable = true;
    if(this.IncrementalMain.getWorker() >= this.IncrementalMain.getWorkerLimit())
    {
      enable = false;
    }
    return enable;
   }

   buttonRemoveWorker(){
    this.IncrementalMain.removeWorker()
   }

   allowRemoveWorker(){
    let enable = true;
    if(this.IncrementalMain.getWorker() <= 0)
    {
      enable = false;
    }
    return enable;
   }

}
