import { Component } from '@angular/core';
import { CommuctionService } from '../commuction.service';

@Component({
  selector: 'app-calculetar',
  templateUrl: './calculetar.component.html',
  styleUrls: ['./calculetar.component.css']
})
export class CalculetarComponent {

  numberone: number = 0;
  numbertwo: number = 0;

  constructor(private calcuservices: CommuctionService) {
    
  }
  sendvalues(){
    this.calcuservices.num1commuctioon=this.numberone;
    this.calcuservices.num2commuctioon=this.numbertwo;
  
  }



  
}