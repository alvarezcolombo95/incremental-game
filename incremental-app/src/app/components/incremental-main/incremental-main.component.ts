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

  // M E T H O D S
  get pesos()
  {
    return this.IncrementalMain.getPesos();
  }

  buttonPrintPesos(amount: number)
  {
    this.IncrementalMain.addAmount(amount)
  }

  buttonReset()
  {
    this.IncrementalMain.resetAmount()
  }

  //commented
  /*
  while(){
    this.incremental++
    await new Promise(resolve=> setTimeout(resolve,100));
  }*/

}
