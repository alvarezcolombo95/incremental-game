import { Component } from '@angular/core';
import { IncrementalMainService } from 'src/app/services/incremental-main.service';

@Component({
  selector: 'app-agro-main',
  templateUrl: './agro-main.component.html',
  styleUrls: ['./agro-main.component.css']
})
export class AgroMainComponent {

  constructor(private IncrementalMain: IncrementalMainService) {
    
  }

  // G E T T E R S 

  get soyQueue(){
    return this.IncrementalMain.getSoyQueue()
  }
  
  get harvestProgress(){
    return this.IncrementalMain.getHarvestProgress()
  }

  get harvestSpeed(){
    return this.IncrementalMain.getHarvestSpeed()
  }

  get harvestSpeedSeconds(){
    return Math.round( 100 / this.IncrementalMain.getHarvestSpeed() )
  }

  get retenciones(){
    return this.IncrementalMain.getRetenciones()
  }

  get harvestComplete(){
    return this.IncrementalMain.getHarvestComplete()
  }

  // B U T T O N S
  buttonAddSoy(amount: number){
    this.IncrementalMain.addSoyToQueue(amount);
    console.log("soy")
  }

  buttonUpgradeSpeed(amount: number){
    this.IncrementalMain.upgradeHarvestSpeed(amount)
  }

  buttonSubirRetenciones(amount: number){
    this.IncrementalMain.subirRetenciones(amount)
  }
}
