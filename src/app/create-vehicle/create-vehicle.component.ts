import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
upid:string='';

  constructor(private vehicleService:VehicleService, private routernav:Router,private updatevehicle:ActivatedRoute) {
    updatevehicle.params.subscribe((update:any)=>{
this.upid=update.id;
vehicleService.viewatevehiclebyid(update.id).subscribe((resupdate:any)=>{
  this.createvehicleform.patchValue(resupdate);
})
    })

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
    if(this.upid){
      this.vehicleService.updatevehicle(this.createvehicleform.value,this.upid).subscribe((res:any)=>{
        alert('Vehicle updated successfully');
        this.createvehicleform.reset(); 
        this.routernav.navigateByUrl('/dashbord/vehicletwo');
      })
     
}
    else {
 this.vehicleService.createvehicle(this.createvehicleform.value).subscribe((res:any)=>{
  alert('Vehicle created successfully');
  this.createvehicleform.reset(); 

  this.routernav.navigateByUrl('/dashbord/vehicletwo');
})
}

  }
}
