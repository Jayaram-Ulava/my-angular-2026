import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles:Vehicle[] = [];
  constructor(private getvehicles:VehicleService){
   this.getvehiclesall();
  }


  getvehiclesall () {
  this.getvehicles.getvehicle().subscribe((data:Vehicle[])=> {
      console.log(data)
      this.vehicles=data;
      
    })
  }

deleteVehicle(id:string) {
    this.getvehicles.deletevehicle(id).subscribe((deleteve:Vehicle)=>{
      alert('Vehicle deleted successfully');
      location.reload();
    },(error:any)=>{
      alert('Failed to delete vehicle');
    })
  }
searchve:any='';
  search() {
    this.getvehicles.searchvehicle(this.searchve).subscribe((search:Vehicle[])=>{
      this.vehicles=search;
      
    })

  }
  curentpage:number=0;
  gottopage(page:number) {
    this.curentpage=page;
    this.getvehicles.pagevehicle(page).subscribe((pagevehicle:Vehicle[])=>{
      this.vehicles=pagevehicle;

    })
  }
  prvi() {
this.curentpage--;
this.gottopage(this.curentpage);
  }
  nextpage(){
    this.curentpage++;
this.gottopage(this.curentpage);

  }

  isAsc:boolean=false;
  sortvehicle(Column:string) {
    this.isAsc = !this.isAsc;
    this.getvehicles.sortvehicle(Column,this.isAsc ? 'asc' : 'desc').subscribe((sorting:Vehicle[])=>{
this.vehicles=sorting;
    },(err:any)=>{
      alert('Failed to sort vehicles');
    })

  }  

}
