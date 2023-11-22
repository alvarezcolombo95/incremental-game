import { Component, HostListener } from '@angular/core';
import { SaveServiceService } from '../service/save-service.service';

@Component({
  selector: 'app-incremental-main',
  templateUrl: './incremental-main.component.html',
  styleUrls: ['./incremental-main.component.css']
})
export class IncrementalMainComponent {

  //variables
  incremental: number = this.saveService.getGameState();

  //constructor
  constructor(private saveService: SaveServiceService) { }


  //methods
  addAmount(amount: number){
    this.incremental = this.incremental + amount
  }

  autoAddAmount(quantity: number){

  }

  resetAmount(){
    this.incremental = 0;
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    this.saveService.saveGameState(this.incremental);
  }


  //commented
  /*
  while(){
    this.incremental++
    await new Promise(resolve=> setTimeout(resolve,100));
  }*/

}
