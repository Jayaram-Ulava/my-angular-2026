import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommuctionService {

  num1commuctioon: number = 0;
  num2commuctioon: number = 0;
  calculat: BehaviorSubject<number> = new BehaviorSubject(0);

  addcommu() {
    const result = this.num1commuctioon + this.num2commuctioon;
    this.calculat.next(result);
  }

  subcommu() {
    const result = this.num1commuctioon - this.num2commuctioon;
    this.calculat.next(result);
  }

  multicommu() {
    const result = this.num1commuctioon * this.num2commuctioon;
    this.calculat.next(result);
  }

  divcommu() {
    const result = this.num1commuctioon / this.num2commuctioon;
    this.calculat.next(result);
  }

  constructor() { }

  countsummyry(){
    this.calculat.value ? this.num1commuctioon = this.calculat.value : this.num1commuctioon = 0;
  }
}