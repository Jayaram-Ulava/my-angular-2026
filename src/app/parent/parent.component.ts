import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  parent:string='';
  childone:string='';

  addchildcode(myvalue:string){
    this.childone=myvalue;

  }
   
}
