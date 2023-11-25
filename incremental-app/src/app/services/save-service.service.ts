import { Injectable } from '@angular/core';
import { GameState } from '../game-state'

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
     pesos: 0,
     printer: {basePrice: 100, scaling: 1.4, level: 0}
   };
  }
  try 
  {
    console.log("entro a try")
    return JSON.parse(stats);
  } 
  catch (error) 
  {
   console.error('Error parsing game state:', error);
   return {
     //default values
     pesos: 0,
     printer: {basePrice: 100, scaling: 1.4, level: 0}
   };
  }
 }

 public removeGameState(): void {
   localStorage.removeItem('stats');
 }
}