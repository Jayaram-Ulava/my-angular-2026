import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-two',
  templateUrl: './vehicle-two.component.html',
  styleUrls: ['./vehicle-two.component.css']
})
export class VehicleTwoComponent {
  vehicles:any = [];
  constructor(private getvehicles:VehicleService){
   this.getvehicleQueryParams();
  }
  
  // query params
    
  term:string='';
  column:string='';
  order:string='';
  page:number=1;

  getvehicleQueryParams() {

this.getvehicles.getvehicleQueryParams(this.term, this.column, this.order, this.page).subscribe((querydata:any)=>{
  this.vehicles=querydata;
},(err:any)=>{
  alert('Error fetching data with query params');
})
  }

  // search
search() {
  this.getvehicleQueryParams();

}

//sorrting
isAsc:boolean=false
sort(column:string){
  this.column= column;
  this.isAsc = !this.isAsc;
  this.order=this.isAsc? 'asc': "desc";
  this.getvehicleQueryParams();
 
}

// pagenacton

gotvehicle(page:number){
this.page=page;
this.getvehicleQueryParams();
}

}

