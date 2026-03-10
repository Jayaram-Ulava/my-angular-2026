import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  cities:string[] = ['Hyderabad', 'Bangalore', 'Chennai', 'Mumbai'];


  products :any= [
    {name:'pen',price:20,color:'red'},
    {name:'pencil',price:10,color:'blue'},
    {name:'book',price:100,color:'green'},
    {name:'bag',price:500,color:'yellow'},
    {name:'laptop',price:50000,color:'black'},
    {name:'mobile',price:20000,color:'white'},
    {name:'watch',price:2000,color:'silver'}
  ]

  showHeader:boolean = false;

  today:Date = new Date();

  // user:any = {name:'Mohith',age:30,city:'Hyderabad'};
}
