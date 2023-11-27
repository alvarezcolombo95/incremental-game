import { Component } from '@angular/core';
import { IncrementalMainService } from 'src/app/services/incremental-main.service';

@Component({
  selector: 'app-estado-main',
  templateUrl: './estado-main.component.html',
  styleUrls: ['./estado-main.component.css']
})
export class EstadoMainComponent {

  constructor(private IncrementalMain: IncrementalMainService) {
    
  }

  get ministerio(){
    return this.IncrementalMain.getMinisterio()
  }

  get worker(){
    return this.IncrementalMain.getWorker()
  }

  get powerPoints(){
    return this.IncrementalMain.getPowerPoints()
  }

  

}
