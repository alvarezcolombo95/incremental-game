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
  get lockAgroMain(){
    return this.IncrementalMain.getLockAgroMain()
  }

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
    return Math.round( 100 / this.IncrementalMain.getHarvestSpeed().level )
  }

  get harvestSpeedPrice(){
    return this.IncrementalMain.getHarvestSpeedPrice()
  }

  get retenciones(){
    return this.IncrementalMain.getRetenciones()
  }

  get retencionesPrice(){
    return this.IncrementalMain.getRetencionesPrice()
  }

  get retencionesGanancia(){
    //USD 15 por nivel de rentencion, editar desde aca
    return this.IncrementalMain.getRetenciones().level*15
  }
  
  get harvestComplete(){
    return this.IncrementalMain.getHarvestComplete()
  }

  // B U T T O N S
  buttonUnlockComponent(){
    this.IncrementalMain.unlockAgro()
  }

  buttonAddSoy(amount: number){
    this.IncrementalMain.payPesos(250)
    this.IncrementalMain.addSoyToQueue(amount);
  }

  buttonUpgradeSpeed(amount: number){
    this.IncrementalMain.upgradeHarvestSpeed(amount)
  }

  buttonSubirRetenciones(){
    this.IncrementalMain.subirRetenciones(1)
  }

  enableAddSoy(){
    let enable = true;
    if(this.IncrementalMain.getPesos() < 250)
    {
      enable = false;
    }
    return enable;
  }
}
