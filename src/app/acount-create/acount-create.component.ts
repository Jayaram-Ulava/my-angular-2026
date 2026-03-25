import { Component } from '@angular/core';
import { AcountsService } from '../acounts.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-acount-create',
  templateUrl: './acount-create.component.html',
  styleUrls: ['./acount-create.component.css']
})
export class AcountCreateComponent {
constructor(private acountpost:AcountsService){

}

acountform: FormGroup = new FormGroup({
  
})
}
