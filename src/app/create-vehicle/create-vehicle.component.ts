import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {


  constructor(private vehicleService:VehicleService, private routernav:Router) {

  }
  createvehicleform: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    color: new FormControl(),
    type: new FormControl(),
    image: new FormControl(), 
    cost: new FormControl(),
    tyres: new FormControl(),
    fuel:new FormControl(),
  })

  getvehicledata(){
    if(this.createvehicleform.value){
this.vehicleService.createvehicle(this.createvehicleform.value).subscribe((res:any)=>{
  alert('Vehicle created successfully');
  this.createvehicleform.reset(); 

  this.routernav.navigateByUrl('/dashbord/vehicletwo');
})}
    else {
  alert('Please fill in all the required fields');
}

  }
}
