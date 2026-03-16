import { Component } from '@angular/core';
import { AcountsService } from '../acounts.service';

@Component({
  selector: 'app-acounts',
  templateUrl: './acounts.component.html',
  styleUrls: ['./acounts.component.css']
})
export class AcountsComponent {
acounts:any = [];
  constructor(private acountservice:AcountsService) {
// this.getacounts();
this.getparamquary();
  }

// getacounts() {
//   this.acountservice.getacount().subscribe((acount:any)=> {
//     console.log(acount)
//     this.acounts=acount;
//   })
// }

term:string="";
column:string=""
order:string="";
page:number=1;
getparamquary(){
  this.acountservice.getacountParamquary(this.term,this.column,this.order,this.page).subscribe((acoutparam:any)=>{
    this.acounts=acoutparam;
  })

}
searchacout() {
  this.term=this.term
  this.getparamquary();
}

isAsc:boolean=false;
sort(column:string) {
this.column=column;
this.isAsc=!this.isAsc;
this.order=this.isAsc? 'asc':'desc';
this.getparamquary();
}

pagenaction(page:number){

  this.page=page;
  this.getparamquary();
} 
prev(){
  this.page--;
  this.getparamquary();
}
next(){
  this.page++;
  this.getparamquary();
}

deleteacout(id:string){

  if(confirm('Are you sure you want to delete this account?')){
    
  this.acountservice.deleteacout(id).subscribe((deleteacount:any)=>{
 alert('You are '+deleteacount.account_name+' account deleted successfully');
 location.reload();
  })
  }
  else {
    alert('Account deletion cancelled');
  }


}

}
