import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  vehicles:any = [];
  constructor(private getvehicles:VehicleService){
   this.getvehiclesall();
  }


  getvehiclesall () {
  this.getvehicles.getvehicle().subscribe((data:any)=> {
      console.log(data)
      this.vehicles=data;
    })
  }

  deleteVehicle(i:number) {
    this.vehicles.splice(i, 1);
  }


  

}
