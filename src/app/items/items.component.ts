import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  constructor(private navcommn:CommonService){

  }
  add() {
this.navcommn.setcartcount();
  }

  decr() {
    this.navcommn.decrecount();
  }
}
