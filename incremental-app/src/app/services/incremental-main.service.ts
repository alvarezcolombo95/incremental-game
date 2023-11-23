import { Injectable } from '@angular/core';
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

  

}
