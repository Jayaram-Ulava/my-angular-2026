import { Component, OnInit } from '@angular/core';
import { CommuctionService } from '../commuction.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  result: number = 0;

  constructor(private commuservices: CommuctionService) {}

  ngOnInit() {
    this.commuservices.calculat.subscribe((data: number) => {
      this.result = data;
    });
  }

  sum() {
    this.commuservices.addcommu();
    
  }

  sub() {
    this.commuservices.subcommu();
  }

  multi() {
    this.commuservices.multicommu();
  }

  div() {
    this.commuservices.divcommu();
  }
}