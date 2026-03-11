import { Component } from '@angular/core';
import { NaukriService } from '../naukri.service';

@Component({
  selector: 'app-naukri',
  templateUrl: './naukri.component.html',
  styleUrls: ['./naukri.component.css']
})
export class NaukriComponent {

  employee : any =[];
  constructor(private nauriservice:NaukriService){

  }

  ngOnInit(){
    this.nauriservice.getNaukriData().subscribe((nakuridata:any)=>{
      console.log(nakuridata);
      this.employee= nakuridata;
    })
  }

}
