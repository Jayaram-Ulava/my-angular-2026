import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

    constructor(private navcommn:CommonService){
  
    }
  countitem:number=0;
  ngOnInit(){
    this.navcommn.getcartcount().subscribe((data)=>{
      this.countitem=data;
    })
  }
}
