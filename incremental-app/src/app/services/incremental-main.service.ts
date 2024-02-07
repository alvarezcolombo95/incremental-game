import { Injectable } from '@angular/core';
import { SaveServiceService } from './save-service.service';
import { GameState } from '../interfaces/game-state'
import { timeout } from 'rxjs';
import { Upgradable } from '../interfaces/upgradable';

@Injectable({
  providedIn: 'root'
})
export class IncrementalMainService {

    constructor(private saveService: SaveServiceService) 
    {
      //restart soy production
      if(this.stats.agroMain.harvestProgress != 0)
      {
        this.growSoy()
        this.harvestComplete = false;
        this.allowManualPlantSoy = false;
        this.sunText = ''
        this.sunBubble = false;
      }
    }


  //gameState
  private stats: GameState = this.saveService.getGameState()

  //component blockers

  private growTimeoutId: undefined | ReturnType<typeof setTimeout>;
  private harvestComplete: boolean = false;
  private allowManualPlantSoy: boolean = true;

  //sun comments
  private sunText: string = ''
  private sunBubble: boolean = false;


  //////////////////////////////////////////

  // G E T T E R S
  getStats(){
    return this.stats;
  }

  getSunText(){
    return this.sunText;
  }

  getSunBubble(){
    return this.sunBubble;
  }

  //centralBank
  getPesos(){
    return this.stats.centralBank.pesos;
  }
  
  getDolares(){
    return this.stats.centralBank.dolares;
  }

  getBilleteLevel(){
    return this.stats.centralBank.billeteLevel
  }

  getBilleteArray(){
    return this.stats.centralBank.billeteArray
  }

  getCurrentBillete(){
    return this.stats.centralBank.billeteArray[this.stats.centralBank.billeteLevel.level]
  }

  getPrinter(){
    return this.stats.centralBank.printer
  }

  getPrinterPrice(){
    return Math.round( this.stats.centralBank.printer.basePrice * Math.pow(this.stats.centralBank.printer.scaling, this.stats.centralBank.printer.level) )
  }

  getPrinterEff(){
    return this.stats.centralBank.printerEff
  }

  getPrinterEffPrice(){
    return Math.round( this.stats.centralBank.printerEff.basePrice * Math.pow(this.stats.centralBank.printerEff.scaling, this.stats.centralBank.printerEff.level) )
  }

  getPesosProduction(){
    //printer level * billete actual * printerEff level (este ultimo podria ser eliminado)
    //esto es lo que deberia ganar cada 1 segundo
    return this.stats.centralBank.printer.level * this.getCurrentBillete() * this.stats.centralBank.printerEff.level
  }

  //agroMain
  getLockAgroMain(){
    return this.stats.agroMain.componentLock
  }

  getSoyQueue(){
    return this.stats.agroMain.soyQueue
  }

  getHarvestProgress(){
    return this.stats.agroMain.harvestProgress;
  }

  getHarvestSpeed(){
    return this.stats.agroMain.harvestSpeed
  }

  getHarvestSpeedPrice(){
    return Math.round( this.stats.agroMain.harvestSpeed.basePrice * Math.pow(this.stats.agroMain.harvestSpeed.scaling, this.stats.agroMain.harvestSpeed.level) )
  }

  getRetenciones(){
    return this.stats.agroMain.retenciones;
  }

  getRetencionesPrice(){
    return Math.round( this.stats.agroMain.retenciones.basePrice * Math.pow(this.stats.agroMain.retenciones.scaling, this.stats.agroMain.retenciones.level) )
  }

  getHarvestComplete(){
    return this.harvestComplete;
  }

  //government
  getLockGovernment(){
    return this.stats.government.componentLock
  }

  getMinisterio(){
    return this.stats.government.ministerio;
  }

  getMinisterioPrice(){
    return  Math.round(this.stats.government.ministerio.basePrice * Math.pow(this.stats.government.ministerio.scaling, this.stats.government.ministerio.level))
  }

  getWorker(){
    return this.stats.government.worker;
  }

  getWorkerLimit(){
    return this.stats.government.ministerio.level * 50
  }

  getWorkerCost(){
    //cada worker cuesta 0.05 pesos por segundo * el billete actual
    return (this.stats.government.worker * (this.getCurrentBillete()*0.05))
  }

  getPowerPoints(){
    return this.stats.government.powerPoints;
  }

  //afip
  getLockAfip(){
    return this.stats.afipMain.componentLock
  }

  getImpuesto(){
    return this.stats.afipMain.impuesto
  }

  getImpuestoPrice(){
    return this.calculatePrice(this.stats.afipMain.impuesto)
  }

  getValor(){
    return this.stats.afipMain.valor
  }

  getRecaudacion(){
    return Math.floor(this.getImpuesto().level * (this.getWorkerCost() * 0.01)) 
  }

  //fmi
  getLockFmi(){
    return this.stats.fmiMain.componentLock
  }

  getDeuda(){
    return this.stats.fmiMain.deuda
  }

  getIntereses(){
    return this.stats.fmiMain.intereses
  }

  //futbol
  getLockFutbolMain(){
    return this.stats.futbolMain.componentLock
  }

  getWorldCups(){
    return this.stats.futbolMain.worldCups
  }

  //army
  getLockArmyMain(){
    return this.stats.armyMain.componentLock
  }

  //space
  getLockSpaceMain(){
    return this.stats.spaceMain.componentLock
  }

  //conicet
  getLockConicetMain(){
    return this.stats.conicetMain.componentLock
  }

  getScientist(){
    return this.stats.conicetMain.scientist
  }

  getSciencePoints(){
    return this.stats.conicetMain.sciencePoints
  }

  getScientistCost(){
    //cada scientist cuesta 0.10 pesos por segundo * el billete actual
    return (this.stats.conicetMain.scientist * (this.getCurrentBillete()*0.1))
  }


  //////////////////////////////////////////

  // C O M P O N E N T   U N L O C K E R S

  unlockAfip(){
    this.stats.afipMain.componentLock = false;
  }

  unlockAgro(){
    this.stats.agroMain.componentLock = false;
  }

  unlockGovernment(){
    this.stats.government.componentLock = false;
  }

  unlockFmi(){
    this.stats.fmiMain.componentLock = false;
    this.sunSays('pasaron cosas')
  }

  unlockFutbol(){
    this.stats.futbolMain.componentLock = false;
  }

  unlockArmy(){
    this.stats.armyMain.componentLock = false;
  }

  unlockSpace(){
    this.stats.spaceMain.componentLock = false;
  }

  unlockConicet(){
    this.stats.conicetMain.componentLock = false;
  }


  //////////////////////////////////////////

  // M E T H O D S 

  deleteSave(){
    this.saveService.removeGameState()
    this.stats = this.saveService.getGameState()

    clearInterval(this.growTimeoutId);
    this.harvestComplete = false;
    this.allowManualPlantSoy = true;
  }

  calculatePrice(upgradable: Upgradable)
  {
    return Math.floor(upgradable.basePrice * Math.pow(upgradable.scaling, upgradable.level))
  }

  async sunSays(text: string){
    this.sunText = text
    this.sunBubble = true;
    await new Promise(resolve => setTimeout(resolve,3000)); 
    this.sunBubble = false;
    this.sunText = '';
  }

  //centralBank
  addPesos(amount: number){
    this.stats.centralBank.pesos = this.stats.centralBank.pesos + amount
  }

  payPesos(amount: number){
    this.stats.centralBank.pesos = this.stats.centralBank.pesos - amount
  }

  addDolares(amount: number){
    this.stats.centralBank.dolares = this.stats.centralBank.dolares + amount
  }

  payDolares(amount: number){
    this.stats.centralBank.dolares = this.stats.centralBank.dolares - amount
  }

  addPrinter(){
    this.payPesos( this.getPrinterPrice() ) 
    this.stats.centralBank.printer.level++
  }

  upgradePrinterEff(){
    this.payPesos(this.getPrinterEffPrice())
    this.stats.centralBank.printerEff.level = this.stats.centralBank.printerEff.level + 1
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
    this.addPesos( this.getPesosProduction() / 10)
  }

  upgradeBillete(){
    this.payPowerPoints(this.calculatePrice(this.stats.centralBank.billeteLevel))
    this.stats.centralBank.billeteLevel.level = this.stats.centralBank.billeteLevel.level + 1
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
    this.stats.agroMain.harvestProgress = this.stats.agroMain.harvestProgress + this.stats.agroMain.harvestSpeed.level * 0.1

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

 //PAGOS DESACTIVADOS !!! REACTIVAR

 upgradeHarvestSpeed(amount: number){
  //this.payDollars(this.getHarvestSpeedPrice())
  this.stats.agroMain.harvestSpeed.level = this.stats.agroMain.harvestSpeed.level + amount
 }

 subirRetenciones(amount: number){
  //this.payPowerPoints(this.getRetencionesPrice())
  this.stats.agroMain.retenciones.level = this.stats.agroMain.retenciones.level + amount

  if(this.stats.agroMain.retenciones.level == 2)
  {
    this.sunSays('mi voto es no positivo')
  }
 }

 cobrarRetenciones(){
  this.stats.centralBank.dolares = this.stats.centralBank.dolares + (this.stats.agroMain.retenciones.level * 15)
 }

 //government
 addMinisterio(){
  this.payPesos(this.getMinisterioPrice())
  this.stats.government.ministerio.level++
 }

 addWorker(){
  //no tiene precio de compra sino
  this.stats.government.worker++
 }

 removeWorker(){
  this.stats.government.worker = this.stats.government.worker - 1
  //pagar indemnizaciones
  this.payPesos(this.getCurrentBillete() * 10) 
 }

 payWorkers(amount: number){
  this.payPesos(amount)
 }

 earnPowerPoints(amount: number){
  this.stats.government.powerPoints = this.stats.government.powerPoints + amount
 }

 payPowerPoints(amount: number){
  this.stats.government.powerPoints = this.stats.government.powerPoints - amount
 }

 //afip-main
 addImpuesto(){
  //this.payPowerPoints(this.getImpuestoPrice())
  this.stats.afipMain.impuesto.level++
 }

 recaudarImpuestos(){
  this.addPesos(this.getRecaudacion())
 }

 //fmi-main
 pedirPrestamo(){
  this.stats.fmiMain.deuda = this.stats.fmiMain.deuda + this.stats.fmiMain.montoPorPrestamo
  this.addDolares(this.stats.fmiMain.montoPorPrestamo)
  this.sunSays('bruh')
  
 }

 saldarPrestamo(){  
  this.payDolares(this.stats.fmiMain.deuda)
  this.stats.fmiMain.deuda = 0
 }


 inflarPrestamo(){
  this.stats.fmiMain.deuda = this.stats.fmiMain.deuda + Math.round(this.stats.fmiMain.deuda*this.stats.fmiMain.intereses) 
 }



 



  

}
