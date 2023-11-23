import { HostListener, Injectable } from '@angular/core';
import { SaveServiceService } from './save-service.service';

@Injectable({
  providedIn: 'root'
})
export class IncrementalMainService {

  constructor(private saveService: SaveServiceService) { }

  private pesos: number = this.saveService.getGameState();

  // M E T H O D S 
  addAmount(amount: number){
    this.pesos = this.pesos + amount
  }

  autoAddAmount(quantity: number){

  }

  resetAmount(){
    this.pesos = 0;
  }

  getPesos()
  {
    return this.pesos;
  }

  //this saves on refresh or tab close
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    this.saveService.saveGameState(this.pesos);
  }

}
