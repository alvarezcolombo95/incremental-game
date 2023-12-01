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

  buttonUnlockComponent(){
    this.IncrementalMain.unlockFutbol()
  }
}
