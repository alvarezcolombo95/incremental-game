import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IncrementalMainService } from 'src/app/services/incremental-main.service';
import { SelectAltGovComponent } from '../select-alt-gov/select-alt-gov.component';

@Component({
  selector: 'app-estado-main',
  templateUrl: './estado-main.component.html',
  styleUrls: ['./estado-main.component.css']
})
export class EstadoMainComponent {

  private intervalId1: any
  private intervalId2: any

  constructor(private IncrementalMain: IncrementalMainService, private dialog: MatDialog) {}

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
    this.intervalId1 = setInterval(() => this.IncrementalMain.payWorkers(this.IncrementalMain.getWorkerCost() * 10), 10000);
    this.intervalId2 = setInterval(() => this.IncrementalMain.earnPowerPoints(parseFloat((this.IncrementalMain.getWorker() * 0.001).toFixed(2))), 100)
  }

  stopInterval(){
    clearInterval(this.intervalId1);
    clearInterval(this.intervalId2);
  }

  

  // G E T T E R S
  get lockGovernment(){
    return this.IncrementalMain.getLockGovernment()
  }
  
  get componentPrice(){
    return 100;
  }

  get ministerio(){
    return this.IncrementalMain.getMinisterio()
  }

  get ministerioPrice(){
    return this.IncrementalMain.getMinisterioPrice()
  }

  get worker(){
    return this.IncrementalMain.getWorker()
  }

  get workerLimit(){
    return this.IncrementalMain.getWorkerLimit()
  }

  get workerCost(){
    return this.IncrementalMain.getWorkerCost()
  }

  get workerCostRounded(){
    return this.IncrementalMain.getWorkerCost().toFixed(2)
  }

  get powerPoints(){
    return this.IncrementalMain.getPowerPoints()
  }

  get powerPointsRounded(){
    return Math.floor(this.IncrementalMain.getPowerPoints()) 
  }

  buttonUnlockComponent(){
    this.IncrementalMain.payPesos(this.componentPrice)
    this.IncrementalMain.unlockGovernment()
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

  buttonAbrirMinisterio(){
    this.IncrementalMain.addMinisterio()
  }

  allowAbrirMinisterio(){
    let enable = false;
    if(this.IncrementalMain.availableFunds( this.IncrementalMain.getPesos(), this.IncrementalMain.getMinisterioPrice()))
    {
      enable = true;
    }
    return enable;
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

   // D I A L O G   A L T   G O V 
   buttonAltGov(){
    const dialogRef = this.dialog.open(SelectAltGovComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
