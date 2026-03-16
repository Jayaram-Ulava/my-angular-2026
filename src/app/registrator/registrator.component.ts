import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registrator',
  templateUrl: './registrator.component.html',
  styleUrls: ['./registrator.component.css']
})
export class RegistratorComponent {


showPassword:boolean=false;

constructor(private regService:RegistrationService,
private router:Router){}

registerForm:FormGroup=new FormGroup({

name:new FormControl(''),
email:new FormControl(''),
mobile:new FormControl(''),
password:new FormControl('')

})

togglePassword(){
this.showPassword=!this.showPassword
}

register(){

console.log(this.registerForm.value)

this.regService.postregistration(this.registerForm.value)
.subscribe((res:any)=>{

alert("Registration Successful")

this.router.navigateByUrl("/login")

},(err:any)=>{

alert("Registration Failed")

})

}
}
