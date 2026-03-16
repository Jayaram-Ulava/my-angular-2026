import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObjectUnsubscribedErrorCtor } from 'rxjs/internal/util/ObjectUnsubscribedError';

@Injectable({
  providedIn: 'root'
})
export class IdcardsService {

  constructor(private httpidcard:HttpClient) { }

  getidcards() {
    return this.httpidcard.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit=10&page=1');
  }

  getidcardQueryParams(term:string, column:string, order:string, page:number):Observable<any> {
    return this.httpidcard.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter='+term+"&sortBy="+column+"&order="+order+'&limit=10&page='+page);
  }

  deleteidcard(id:number):Observable<any>{
return this.httpidcard.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/student/'+id);
  }


  addidcard(idcarddata:any):Observable<any>{
    return this.httpidcard.post('https://6128991386a213001729f9df.mockapi.io/test/v1/student', idcarddata);

  }

}
