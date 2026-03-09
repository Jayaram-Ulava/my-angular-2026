import { Component } from '@angular/core';
import { AcountsService } from '../acounts.service';

@Component({
  selector: 'app-acounts',
  templateUrl: './acounts.component.html',
  styleUrls: ['./acounts.component.css']
})
export class AcountsComponent {
acounts:any = [];
  constructor(private acountservice:AcountsService) {
this.getacounts();
  }

getacounts() {
  this.acountservice.getacount().subscribe((acount:any)=> {
    console.log(acount)
    this.acounts=acount;
  })
}

}
