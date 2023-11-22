import { Injectable } from '@angular/core';


@Injectable({
 providedIn: 'root'
})

export class SaveServiceService {

 constructor() { }

 public saveGameState(incremental: number): void {
   localStorage.setItem('incremental', incremental.toString());
 }

 public getGameState(): number {
   const incremental = localStorage.getItem('incremental');
   return incremental ? Number(incremental) : 0;
 }

 public removeGameState(): void {
   localStorage.removeItem('incremental');
 }
}