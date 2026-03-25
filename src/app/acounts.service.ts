import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcountsService {
baseUrl:string='https://6128991386a213001729f9df.mockapi.io/test/v1/principals';
  constructor(private httpacount:HttpClient) { }

  getacount():Observable<any> {''
    return this.httpacount.get(this.baseUrl+'?limit=12&page=1');
  }

   viewacount(id:string):Observable<any> {''
    return this.httpacount.get(this.baseUrl+'/'+id);
  }

  
  getacountParamquary(term:string,column:string,order:string,page:number):Observable<any> {
    return this.httpacount.get(this.baseUrl+'?filter='+term+'&sortBy='+column+"&order="+order+"&limit=10&page="+page);
  }

  deleteacout(id:any):Observable<any> {
    return this.httpacount.delete(this.baseUrl+'/'+id);
  }


   postacount(postvalue:any):Observable<any> {''
    return this.httpacount.post(this.baseUrl+'/',postvalue);
  }
}
