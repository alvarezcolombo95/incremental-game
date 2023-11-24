import { Component, HostListener } from '@angular/core';
import { SaveServiceService } from '../../services/save-service.service';
import { IncrementalMainService } from 'src/app/services/incremental-main.service';

@Component({
  selector: 'app-incremental-main',
  templateUrl: './incremental-main.component.html',
  styleUrls: ['./incremental-main.component.css']
})
export class IncrementalMainComponent {

  // V A R I A B L E S
  

  // C O N S T R U C T O R
  constructor(private IncrementalMain: IncrementalMainService) { }

  // N G   O N   I N I T
  ngOnInit(): void{
    setInterval(() => this.IncrementalMain.printMoney(), 1000)
  } 

  // G E T T E R S
  get pesos()
  {
    return this.IncrementalMain.getPesos()
  }

  get printer()
  {
    return this.IncrementalMain.getPrinter()
  }

  get printerPrice()
  {
    return Math.round(this.IncrementalMain.getPrinter().basePrice + this.IncrementalMain.getPrinter().scaling * this.IncrementalMain.getPrinter().level)
  }

  // M E T H O D S

  //BUTTONS
  buttonPrintPesos(amount: number)
  {
    this.IncrementalMain.addAmount(amount)
  }

  buttonComprarImpresora(amount: number)
  {
    this.IncrementalMain.addPrinter(amount)
  }

  enableComprarImpresora()
  {
    return this.IncrementalMain.availableFunds(this.pesos, this.printerPrice)
  }

  buttonReset()
  {
    this.IncrementalMain.resetAmount()
  }

  buttonDeleteSave()
  {
    this.IncrementalMain.deleteSave()
  }

  //commented
  /*
  while(){
    this.incremental++
    await new Promise(resolve=> setTimeout(resolve,100));
  }*/

}
