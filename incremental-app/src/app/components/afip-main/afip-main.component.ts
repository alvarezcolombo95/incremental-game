import { Component } from '@angular/core';
import { IncrementalMainService } from 'src/app/services/incremental-main.service';

@Component({
  selector: 'app-afip-main',
  templateUrl: './afip-main.component.html',
  styleUrls: ['./afip-main.component.css']
})
export class AfipMainComponent {

  constructor(private IncrementalMain: IncrementalMainService) {}

  ngOnInit(): void{
    setInterval(() => this.IncrementalMain.recaudarImpuestos(), 60000)
  }

  get impuesto(){
    return this.IncrementalMain.getImpuesto();
  }

  get impuestoPrice(){
    return this.IncrementalMain.getImpuestoPrice()
  }

  get recaudacion(){
    return this.IncrementalMain.getRecaudacion();
  }

  get lockAfip(){
    return this.IncrementalMain.getLockAfip()
  }

  get componentPrice(){
    return 100;
  }

  buttonUnlockComponent(){
    this.IncrementalMain.payPesos(this.componentPrice)
    this.IncrementalMain.unlockAfip()
  }

  displayButtonUnlock(){
    let display = false;
    if(this.IncrementalMain.getPrinter().level >= 2)
    {
      display = true;
    }

    return display;
  }

  allowButtonUnlock(){
    let allow = false;
    if(this.IncrementalMain.availableFunds(this.IncrementalMain.getPesos(), this.componentPrice))
    {
      allow = true;
    }
    return allow;
  }

  buttonCobrarNuevoImpuesto(){
    this.IncrementalMain.payPowerPoints(this.impuestoPrice)
    this.IncrementalMain.addImpuesto()
  }

  allowCobrarNuevoImpuesto(){
    let allow = false
    
    if(this.impuesto.level < 100 && this.IncrementalMain.availableFunds(this.IncrementalMain.getPowerPoints(), this.IncrementalMain.getImpuestoPrice()))
    {
      allow = true;
    }

    return allow;
  }

  
}
