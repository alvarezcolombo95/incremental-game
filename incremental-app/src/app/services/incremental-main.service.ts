import { Injectable } from '@angular/core';
import { SaveServiceService } from './save-service.service';
import { GameState } from '../game-state'

@Injectable({
  providedIn: 'root'
})
export class IncrementalMainService {


  constructor(private saveService: SaveServiceService) { }

  //stats object
  private stats: GameState = this.saveService.getGameState()

  //////////////////////////////////////////

  // G E T T E R S
  getStats(){
    return this.stats;
  }

  getPesos(){
    return this.stats.pesos;
  }

  getPrinter(){
    return this.stats.printer
  }


  //////////////////////////////////////////

  // M E T H O D S 

  deleteSave(){
    this.saveService.removeGameState()
    this.stats = this.saveService.getGameState()
  }

  addAmount(amount: number){
    this.stats.pesos = this.stats.pesos + amount
  }

  resetAmount(){
    this.stats.pesos = 0;
  }

  payAmount(amount: number){
    this.stats.pesos = this.stats.pesos - amount
  }

  addPrinter(amount: number){
    this.payAmount( Math.round(this.stats.printer.basePrice + this.stats.printer.scaling * this.stats.printer.level) )
    this.stats.printer.level++
  }

  availableFunds(funds: number, price: number){
    let available = false;
    if(funds >= price)
    {
      available = true;
    }
    return available;
  }

  printMoney(){
    this.addAmount(this.stats.printer.level)
    console.log("Money is being printed!")
  }

  //probar usar set interval
  

  

}
