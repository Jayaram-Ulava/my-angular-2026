import { Component } from '@angular/core';
import { CommuctionService } from '../commuction.service';

@Component({
  selector: 'app-summry',
  templateUrl: './summry.component.html',
  styleUrls: ['./summry.component.css']
})
export class SummryComponent {

  resultcount:number=0;

  constructor(private commuservices:CommuctionService){

   commuservices.calculat.subscribe((data:number)=>{
    this.resultcount = data;
   })

}
}

