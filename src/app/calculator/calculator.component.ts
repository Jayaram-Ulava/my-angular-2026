import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {


  fristnum:number=0;
  secondnum:number=0;
  totle:number=0
sum() {

this.totle = this.fristnum +this.secondnum;
}

sub() {
  this.totle = this.fristnum - this.secondnum;
}

mul() {
  this.totle = this.fristnum * this.secondnum;
}

div() {
  this.totle = this.fristnum / this.secondnum;
}

clear() {
  this.fristnum = 0;
  this.secondnum = 0;
  this.totle = 0;
}
}
