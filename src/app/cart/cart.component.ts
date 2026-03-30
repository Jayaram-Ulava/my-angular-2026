import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
    countitem:number=0;

    constructor(private navcommn:CommonService){
  navcommn.getcartcount().subscribe((newdata:any)=>{
      this.countitem=newdata;
  })
    }
  
}
