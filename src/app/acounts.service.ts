import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcountsService {

  constructor(private httpacount:HttpClient) { }

  getacount():Observable<any> {''
    return this.httpacount.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/?limit=12&page=1');
  }


  
  getacountParamquary(term:string,column:string,order:string,page:number):Observable<any> {
    return this.httpacount.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter='+term+'&sortBy='+column+"&order="+order+"&limit=10&page="+page);
  }

  deleteacout(id:any):Observable<any> {
    return this.httpacount.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/principals/'+id);
  }
}
