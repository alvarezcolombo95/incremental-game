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
    setInterval(() => this.IncrementalMain.inflarPrestamo(), 60000)
  }

  // G E T T E R S 
  get lockFmi(){
    return this.IncrementalMain.getLockFmi()
  }

  get deuda(){
    return this.IncrementalMain.getDeuda()
  }

  get intereses(){
    return this.IncrementalMain.getIntereses()
  }

  // B U T T O N S
  buttonUnlockComponent(){
    this.IncrementalMain.unlockFmi()
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
