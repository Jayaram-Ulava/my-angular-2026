import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

age:number = 23
name:string= 'jai'
city:string=''

isinvalid:boolean=true

  submit(){
  alert(this.city)

  }

}