import { Component } from '@angular/core';
import { IdcardsService } from '../idcards.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-id',
  templateUrl: './add-new-id.component.html',
  styleUrls: ['./add-new-id.component.css']
})
export class AddNewIDComponent {


  constructor(private idcardaddser:IdcardsService , private routernav:Router) { 
  }

  addForm:FormGroup =  new FormGroup({
    name :new FormControl(),
    phone: new FormControl(),
    dob: new FormControl(),
    profile_picture : new FormControl(),
    email: new FormControl(),
    school_logo : new FormControl(),
    school_name: new FormControl(),
    school_city: new FormControl(),
    school_pin: new FormControl()


  })

  submit() {
    if(this.addForm.valid){
this.idcardaddser.addidcard(this.addForm.value).subscribe((addres:any)=>{
      alert('ID Card added successfully');
      this.routernav.navigateByUrl('/dashbord/idcard/idcards');

    })
    }
    else {
      alert('Please fill all the fields correctly');
    }
    
  }
}
