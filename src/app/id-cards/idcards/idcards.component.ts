import { Component } from '@angular/core';
import { IdcardsService } from '../idcards.service';
import { IdCards } from '../id-cards';

@Component({
  selector: 'app-idcards',
  templateUrl:'./idcards.component.html',
  styleUrls: ['./idcards.component.css']
})
export class IdcardsComponent {
idcardstudent:IdCards[]=[];

  constructor(private idcardsService:IdcardsService) {
    this.getidcardstu();
   }

  
  getidcardstu(): void {
    this.idcardsService.getidcards().subscribe((resid:IdCards[])=>{
      this.idcardstudent=resid;
    })
  }
   
  term:string='';
  column:string='';
  order:string='';
  page:number=1;

  getidcardQueryParams() {
    this.idcardsService.getidcardQueryParams(this.term, this.column, this.order, this.page).subscribe((resid:IdCards[])=>{
      this.idcardstudent=resid;
    },(err:any)=>{
      alert('Error fetching data with query params');
    })
  }

  searchTerm: string = '';
  onSearch() {
    this.term = this.searchTerm;
    this.getidcardQueryParams();
  }
onSort(column: string, order:string){
  this.column=column;
  this.order=order;
  this.getidcardQueryParams();

  }

  pagenaction(page:number){
    this.page=page;
    this.getidcardQueryParams();
    

  }

  prev() {
    this.page--;
    this.getidcardQueryParams();
  }
  next() {
    this.page++;
    this.getidcardQueryParams();    
  }
deleteids(id:IdCards['id']) {

  if(confirm('Are you sure you want to delete this ID card?')) {
    this.idcardsService.deleteidcard(id).subscribe((res:IdCards)=>{
      alert('ID card deleted successfully');
      this.getidcardstu();
    },(err:any)=>{
      alert('Error deleting ID card');
    })
  }

}
  

  }




