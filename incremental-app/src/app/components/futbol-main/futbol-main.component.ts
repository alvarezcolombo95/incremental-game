import { Component } from '@angular/core';
import { IncrementalMainService } from 'src/app/services/incremental-main.service';

@Component({
  selector: 'app-futbol-main',
  templateUrl: './futbol-main.component.html',
  styleUrls: ['./futbol-main.component.css']
})
export class FutbolMainComponent {

  constructor(private IncrementalMain: IncrementalMainService) {
    
  }

  get lockFutbol(){
    return this.IncrementalMain.getLockFutbolMain()
  }

  get componentPrice(){
    return 1000
  }

  

  buttonUnlockComponent(){
    this.IncrementalMain.payPesos(this.componentPrice)
    this.IncrementalMain.unlockFutbol()
  }

  displayButtonUnlock(){
    let display = false;
    if(this.IncrementalMain.getPrinter().level >= 5)
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
}
