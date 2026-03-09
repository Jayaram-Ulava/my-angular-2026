import { Component } from '@angular/core';
import { FlipcartService } from '../flipcart.service';

@Component({
  selector: 'app-flipcart',
  templateUrl: './flipcart.component.html',
  styleUrls: ['./flipcart.component.css']
})
export class FlipcartComponent {
  flipcardalllist:any=[];
  constructor(private getflipservice:FlipcartService) {
    this.getflipcardlist();
  }

  getflipcardlist() {
    this.getflipservice.getflipcard().subscribe((list:any)=>{
      console.log(list)
      this.flipcardalllist = list;
    })
  }

}
