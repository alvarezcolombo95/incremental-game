import { Component, HostListener } from '@angular/core';
import { SaveServiceService } from '../../services/save-service.service';
import { IncrementalMainService } from 'src/app/services/incremental-main.service';
import { MatDialog } from '@angular/material/dialog';
import { ExitConfirmationComponent } from '../exit-confirmation/exit-confirmation.component';

@Component({
  selector: 'app-incremental-main',
  templateUrl: './incremental-main.component.html',
  styleUrls: ['./incremental-main.component.css']
})
export class IncrementalMainComponent {

  // V A R I A B L E S
  private intervalId: any

  // C O N S T R U C T O R
  constructor(private IncrementalMain: IncrementalMainService, private dialog: MatDialog) { }

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
    this.intervalId = setInterval(() => this.IncrementalMain.printMoney(), 100);
  }

  stopInterval(){
    clearInterval(this.intervalId);
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

  get billetePrice()
  {
    return this.IncrementalMain.calculatePrice(this.IncrementalMain.getBilleteLevel())
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
    let maxBillete = this.IncrementalMain.getBilleteLevel().level == (this.IncrementalMain.getBilleteArray()).length - 1;    
    let availableFunds = this.IncrementalMain.availableFunds(this.IncrementalMain.getPowerPoints(), (this.IncrementalMain.calculatePrice(this.IncrementalMain.getBilleteLevel())));
    
    if(maxBillete || !availableFunds)
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

  // D I A L O G   A L T   G O V 
  buttonDeleteSave(){
    const dialogRef = this.dialog.open(ExitConfirmationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result == true)
      {
        this.IncrementalMain.deleteSave()
      }
    });    
  }

  //commented
  /*
  while(){
    this.incremental++
    await new Promise(resolve=> setTimeout(resolve,100));
  }*/

}
