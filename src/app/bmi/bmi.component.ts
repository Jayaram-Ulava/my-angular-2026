import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {

  bminum1!:number;
  bminum2!:number;
  bmitotal:number=0;

bmiwehit:any;
bmitwo:any;

 submit() {

  // if (this.bminum1 <= 0 || this.bminum2 <= 0) {
  //   this.bmiwehit = "Enter valid height and weight";
  //   return;
  // }

  const bmitwo = this.bminum1 / 100;

  this.bmitwo = this.bminum2 / (bmitwo * bmitwo);
  this.bmitwo = (this.bmitwo.toFixed(2));

  if (this.bmitwo < 18.5) {
    this.bmiwehit = "Underweight";
  }
  else if (this.bmitwo < 25) {
    this.bmiwehit = "Normal weight";
  }
  else if (this.bmitwo < 30) {
    this.bmiwehit = "Overweight";
  }
  else {
    this.bmiwehit = "Obese";
  }
 }
}
