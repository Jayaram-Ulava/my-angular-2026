import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-vehicle',
  templateUrl: './view-vehicle.component.html',
  styleUrls: ['./view-vehicle.component.css']
})
export class ViewVehicleComponent {
  iddata:string='';
viewvehicle:any={};
  constructor(private putvehicle:VehicleService,private getactvetrouter:ActivatedRoute){
    getactvetrouter.params.subscribe((viewdata:any)=>{
      this.iddata=viewdata.id;
      putvehicle.viewatevehiclebyid(viewdata.id).subscribe((view:any)=>{
this.viewvehicle=view;
      })
    })


  }
}
