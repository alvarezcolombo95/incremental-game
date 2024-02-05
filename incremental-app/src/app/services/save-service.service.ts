import { Injectable } from '@angular/core';
import { GameState } from '../interfaces/game-state'

@Injectable({
 providedIn: 'root'
})

export class SaveServiceService {

 constructor() { }

 public saveGameState(stats: GameState): void {
   localStorage.setItem('stats', JSON.stringify(stats));
 }

 public getGameState(): GameState {
  const stats = localStorage.getItem('stats');
  console.log(stats)
  if (!stats) {
    console.log("Entro a !stats")
   return {
     //default values
    centralBank: {
      pesos: 0, 
      dolares: 0, 
      printer: {basePrice: 25, scaling: 3, level: 0},
      printerEff: {basePrice: 50, scaling: 2, level: 1},
      billeteLevel: {basePrice: 15, scaling: 4, level: 0},
      billeteArray: [1, 2, 5, 10, 20, 50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000, 50000]},
    agroMain: {
      componentLock: true,
      soyQueue: 0,
      harvestProgress: 0,
      harvestSpeed: {basePrice: 50, scaling: 2, level: 2},
      retenciones: {basePrice: 5, scaling: 2, level: 1}},
    government: {
      componentLock: true,
      ministerio: {basePrice: 100, scaling: 1.4, level: 0}, 
      worker: 0, 
      powerPoints: 0},
    afipMain: {
      impuesto: {basePrice: 5, scaling: 1.4, level: 0},
      valor: 1,
      componentLock: true},
    fmiMain: {
      componentLock: true,
      deuda: 0,
      montoPorPrestamo: 10000000,
      intereses: 0.01},
    futbolMain: {
      componentLock: true,
      worldCups: 0
    },
    armyMain: {
      componentLock: true
    },
    spaceMain: {
      componentLock: true
    },
    conicetMain: {
      componentLock: true,
      sciencePoints: 0,
      scientist: 0
    }
     
   };
  }
  else
  {
    console.log("entro a try")
    return JSON.parse(stats);
  } 
 }

 public removeGameState(): void {
   localStorage.removeItem('stats');
 }
}