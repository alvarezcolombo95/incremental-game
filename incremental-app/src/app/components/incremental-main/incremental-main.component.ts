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
    setInterval(() => this.IncrementalMain.printMoney(), 100)
  } 

  // G E T T E R S
  get pesos()
  {
    return this.IncrementalMain.getPesos()
  }

  get dolares()
  {
    return this.IncrementalMain.getDolares()
  }

  get pesosRounded()
  {
    return Math.round(this.IncrementalMain.getPesos()) 
  }

  get dolaresRounded()
  {
    return Math.round(this.IncrementalMain.getDolares())
  }

  get currentBillete()
  {
    return this.IncrementalMain.getCurrentBillete()
  }

  get printer()
  {
    return this.IncrementalMain.getPrinter()
  }

  get printerPrice()
  {
    return Math.round(this.IncrementalMain.getPrinterPrice()) 
  }

  get printerEffPrice()
  {
    return Math.round(this.IncrementalMain.getPrinterEffPrice())
  }

  get pesosProduction()
  {
    return Math.round(this.IncrementalMain.getPesosProduction())
  }

  // M E T H O D S

  //BUTTONS
  buttonPrintPesos()
  {
    this.IncrementalMain.addPesos(this.IncrementalMain.getCurrentBillete())
  }

  buttonPrintPesosFixed(amount: number)
  {
    this.IncrementalMain.addPesos(amount)
  }

  buttonUpgradeBillete()
  {
    this.IncrementalMain.upgradeBillete()
  }

  enableUpgradeBillete()
  {
    let enable = true;
    if(this.IncrementalMain.getBilleteLevel().level == (this.IncrementalMain.getBilleteArray()).length - 1 )
    {
      enable = false;
    }
    return enable;
  }

  buttonComprarImpresora()
  {
    this.IncrementalMain.addPrinter()
  }

  enableComprarImpresora()
  {
    return this.IncrementalMain.availableFunds(this.pesos, this.printerPrice)
  }

  buttonMejorarImpresoraEff()
  {
    this.IncrementalMain.upgradePrinterEff()
  }

  enableMejorarImpresoraEff()
  {
    return this.IncrementalMain.availableFunds(this.pesos, this.printerEffPrice)
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
