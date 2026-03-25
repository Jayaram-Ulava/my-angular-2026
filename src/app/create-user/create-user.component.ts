import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { googleemail } from '../validators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {


  userform:FormGroup =  new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    email: new FormControl('',[Validators.required, Validators.email, googleemail]),
    phone: new FormControl(),
    password: new FormControl('',[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%?&])[A-Za-z\d$@$!%?&]{5,}$/)]),
    // nested form group
    address:new FormGroup({
      city: new FormControl(),
      pin: new FormControl()
    }) ,

    // dainamic form group
    type: new FormControl(),
    // busfee:new FormControl(),
    // hostlfee:new FormControl()
    cards: new FormArray([])
  })

  get cardArrayname(){
    return this.userform.get('cards') as FormArray;
  }
  addcard() {
    this.cardArrayname.push(
      new FormGroup({
        name: new FormControl(),
        Number: new FormControl(),
        cvv:new  FormControl(),
      })
    )
  }
  deletecard(i:number) {
    this.cardArrayname.removeAt(i);
  }


  constructor(){
    this.userform.get('type')?.valueChanges.subscribe((data:string)=>{
      if(data ==='day scholar'){
        this.userform.addControl('busfee',new FormControl());
        this.userform.removeControl('hostlfee');
      } else if(data ==='hostel student'){
        this.userform.addControl('hostlfee',new FormControl());
        this.userform.removeControl('busfee');

      }
    })
  }

  getuserdata(){
    console.log(this.userform.value);
  }
  

  
}
