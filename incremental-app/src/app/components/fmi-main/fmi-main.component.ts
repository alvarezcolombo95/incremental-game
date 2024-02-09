import { Component } from '@angular/core';
import { IncrementalMainService } from 'src/app/services/incremental-main.service';

@Component({
  selector: 'app-fmi-main',
  templateUrl: './fmi-main.component.html',
  styleUrls: ['./fmi-main.component.css']
})
export class FmiMainComponent {

  constructor(private IncrementalMain: IncrementalMainService) {
    
  }

  ngOnInit(): void{
    setInterval(() => this.IncrementalMain.inflarPrestamo(), 1000)
  }

  // G E T T E R S 
  get lockFmi(){
    return this.IncrementalMain.getLockFmi()
  }

  get componentPrice(){
    return 200;
  }

  get deuda(){
    return this.IncrementalMain.getDeuda()
  }

  get intereses(){
    return this.IncrementalMain.getIntereses()
  }

  // B U T T O N S
  buttonUnlockComponent(){
    this.IncrementalMain.payPesos(this.componentPrice)
    this.IncrementalMain.unlockFmi()
  }

  displayButtonUnlock(){
    let display = false;
    if(this.IncrementalMain.getPrinter().level >= 3)
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

  buttonPedirPrestamo(){
    this.IncrementalMain.pedirPrestamo()
  }

  buttonSaldarDeuda(){
    this.IncrementalMain.saldarPrestamo()
  }

  allowSaldarDeuda(){
    let enable = true;
      if(this.IncrementalMain.getDolares() <= this.IncrementalMain.getDeuda())
      {
        enable = false;
      }
      return enable; 
  }

}
