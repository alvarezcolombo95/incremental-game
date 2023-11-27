import { Injectable } from '@angular/core';
import { SaveServiceService } from './save-service.service';
import { GameState } from '../interfaces/game-state'
import { timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncrementalMainService {

    constructor(private saveService: SaveServiceService) 
    {
      console.log("constructor runs")
      if(this.stats.agroMain.harvestProgress != 0)
      {
        console.log("entra al if")
        this.growSoy()
      }
    }


  //gameState
  private stats: GameState = this.saveService.getGameState()


  private growTimeoutId: undefined | ReturnType<typeof setTimeout>;
  private harvestComplete: boolean = false;
  private allowManualPlantSoy: boolean = true;


  //////////////////////////////////////////

  // G E T T E R S
  getStats(){
    return this.stats;
  }

  //centralBank
  getPesos(){
    return this.stats.centralBank.pesos;
  }
  
  getDolares(){
    return this.stats.centralBank.dolares;
  }

  getPrinter(){
    return this.stats.centralBank.printer
  }

  getPrinterPrice(){
    return this.stats.centralBank.printer.basePrice * Math.pow(this.stats.centralBank.printer.scaling, this.stats.centralBank.printer.level)
  }

  //agroMain
  getSoyQueue(){
    return this.stats.agroMain.soyQueue
  }

  getHarvestProgress(){
    return this.stats.agroMain.harvestProgress;
  }

  getHarvestSpeed(){
    return this.stats.agroMain.harvestSpeed
  }

  getRetenciones(){
    return this.stats.agroMain.retenciones;
  }

  getHarvestComplete(){
    return this.harvestComplete;
  }

  //government
  getMinisterio(){
    return this.stats.government.ministerio;
  }

  getWorker(){
    return this.stats.government.worker;
  }

  getPowerPoints(){
    return this.stats.government.powerPoints;
  }


  //////////////////////////////////////////

  // M E T H O D S 

  deleteSave(){
    this.saveService.removeGameState()
    this.stats = this.saveService.getGameState()
  }

  //centralBank
  addAmount(amount: number){
    this.stats.centralBank.pesos = this.stats.centralBank.pesos + amount
  }

  payAmount(amount: number){
    this.stats.centralBank.pesos = this.stats.centralBank.pesos - amount
  }

  addDollars(amount: number){
    this.stats.centralBank.dolares = this.stats.centralBank.dolares + amount
  }

  payDollars(amount: number){
    this.stats.centralBank.dolares = this.stats.centralBank.dolares - amount
  }

  addPrinter(amount: number){
    this.payAmount( this.getPrinterPrice() ) 
    this.stats.centralBank.printer.level++
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
    this.addAmount(this.stats.centralBank.printer.level / 10)
  }

  //agroMain
  addSoyToQueue(amount: number){
    this.stats.agroMain.soyQueue = this.stats.agroMain.soyQueue + amount;
    if(this.stats.agroMain.harvestProgress == 0 && this.allowManualPlantSoy)
    {
      this.allowManualPlantSoy = false
      this.plantSoy()
    }
  }

  plantSoy(){
    this.stats.agroMain.soyQueue = this.stats.agroMain.soyQueue - 1;
    this.growSoy();
  }
  
  growSoy(){
    this.growTimeoutId = setInterval(() => this.increaseHarvestProgress(), 100)
 }
 
 async increaseHarvestProgress(){
    //increase progress bar
    this.stats.agroMain.harvestProgress = this.stats.agroMain.harvestProgress + this.stats.agroMain.harvestSpeed * 0.1

    //finish
    if(this.stats.agroMain.harvestProgress >= 100){
        //return progress bar to 0
        clearInterval(this.growTimeoutId);

        //pay retenciones
        this.cobrarRetenciones()

        this.stats.agroMain.harvestProgress = 0;

        //display success message and wait 1 second so the progress bar can return to empty position
        this.harvestComplete = true;
        await new Promise(resolve => setTimeout(resolve,1000));        
        this.harvestComplete = false;

        //if theres more soy in the queue, restart process
        if(this.stats.agroMain.soyQueue > 0)
        {
          this.plantSoy()
        }
        else
        {
          this.allowManualPlantSoy = true;
        }        
    }
 }

 upgradeHarvestSpeed(amount: number){
  this.stats.agroMain.harvestSpeed = this.stats.agroMain.harvestSpeed + amount
 }

 subirRetenciones(amount: number){
  this.stats.agroMain.retenciones = this.stats.agroMain.retenciones + amount
 }

 cobrarRetenciones(){
  this.stats.centralBank.dolares = this.stats.centralBank.dolares + this.stats.agroMain.retenciones
 }

  

}
