import { Component } from '@angular/core';
import { IncrementalMainService } from 'src/app/services/incremental-main.service';

@Component({
  selector: 'app-conicet-main',
  templateUrl: './conicet-main.component.html',
  styleUrls: ['./conicet-main.component.css']
})
export class ConicetMainComponent {

  private intervalId1: any
  private intervalId2: any

  constructor(private IncrementalMain: IncrementalMainService) {}

  // N G   O N   I N I T
  ngOnInit(): void{
    this.startInterval()

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.stopInterval();
      } else {
        this.startInterval();
      }
    });
  }
  
  startInterval(){
    this.intervalId1 = setInterval(() => this.IncrementalMain.payScientists(this.IncrementalMain.getScientistCost() * 10), 10000);
    this.intervalId2 = setInterval(() => this.IncrementalMain.earnSciencePoints(parseFloat((this.IncrementalMain.getScientist() * 0.001).toFixed(2))), 100)
  }

  stopInterval(){
    clearInterval(this.intervalId1);
    clearInterval(this.intervalId2);
  }

  get lockConicet(){
    return this.IncrementalMain.getLockConicetMain();
  }

  get componentPrice(){
    return 1;
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
    this.IncrementalMain.payDolares(this.componentPrice)
    this.IncrementalMain.unlockConicet()
  }

  displayButtonUnlock(){
    let display = false;
    if(this.IncrementalMain.getMinisterio().level > 0)
    {
      display = true;
    }

    return display;
  }

  allowButtonUnlock(){
    let allow = false;
    if(this.IncrementalMain.availableFunds(this.IncrementalMain.getDolares(), this.componentPrice))
    {
      allow = true;
    }
    return allow;
  }

  buttonAddScientist(){
    this.IncrementalMain.addScientist()
  }

   buttonRemoveScientist(){
    this.IncrementalMain.removeScientist()
   }

   allowRemoveScientist(){
    let enable = true;
    if(this.IncrementalMain.getScientist() <= 0)
    {
      enable = false;
    }
    return enable;
   }

}
