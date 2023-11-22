import { Component } from '@angular/core';

@Component({
  selector: 'app-incremental-main',
  templateUrl: './incremental-main.component.html',
  styleUrls: ['./incremental-main.component.css']
})
export class IncrementalMainComponent {

  incremental: number = 0;

  addAmount(amount: number){
    this.incremental = this.incremental + amount
  }

  autoAddAmount(quantity: number){

  }

  resetAmount(){
    this.incremental = 0;
  }

  /*
  while(){
    this.incremental++
    await new Promise(resolve=> setTimeout(resolve,100));
  }*/

}
