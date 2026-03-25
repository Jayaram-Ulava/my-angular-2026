import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdcardsService } from '../idcards.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {
stuid:any='';
viewstudent:any={};
  constructor(private routeact:ActivatedRoute, private idcardservis:IdcardsService){

    routeact.params.subscribe((viewstu:any)=>{
      this.stuid=viewstu.id;
      idcardservis.viewidcards(viewstu.id).subscribe((resview:any)=>{
       this.viewstudent=resview;
      })


    })
  }
}
