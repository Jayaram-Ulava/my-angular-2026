import { Component } from '@angular/core';
import { IdcardsService } from '../idcards.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-new-id',
  templateUrl: './add-new-id.component.html',
  styleUrls: ['./add-new-id.component.css']
})
export class AddNewIDComponent {

updateid:string='';
  constructor(private idcardaddser:IdcardsService , private routernav:Router,private upadaterou:ActivatedRoute) { 

    upadaterou.params.subscribe((upadaterou:any)=>{
      this.updateid=upadaterou.id;
      idcardaddser.viewidcards(upadaterou.id).subscribe((resedite:any)=>{
        this.addForm.patchValue(resedite);
      })
    })
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
    if(this.updateid) {
      this.idcardaddser.editidcards(this.addForm.value,this.updateid).subscribe((res:any)=>{
      alert('ID Card updated successfully');
      this.addForm.reset();
      this.routernav.navigateByUrl('/dashbord/idcard/idcards');

      })

    }
    else {
     this.idcardaddser.addidcard(this.addForm.value).subscribe((addres:any)=>{
      alert('ID Card added successfully');
      this.routernav.navigateByUrl('/dashbord/idcard/idcards');

    })
    }
    
  }
}
