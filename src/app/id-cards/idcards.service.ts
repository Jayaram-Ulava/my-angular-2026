import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IdCards } from './id-cards';
  []
@Injectable({ 
  providedIn: 'root'
})
export class IdcardsService {
  baseUrl:string='https://6128991386a213001729f9df.mockapi.io/test/v1/student';

  constructor(private httpidcard:HttpClient) { }

  getidcards():Observable<IdCards[]> {
    return this.httpidcard.get<IdCards[]>(this.baseUrl+'?limit=10&page=1');
  }

   viewidcards(id:number) {
    return this.httpidcard.get<IdCards>(this.baseUrl+'/'+id);
  }

  getidcardQueryParams(term:string, column:string, order:string, page:number):Observable<IdCards[]> {
    return this.httpidcard.get<IdCards[]>(this.baseUrl+'?filter='+term+"&sortBy="+column+"&order="+order+'&limit=10&page='+page);
  }

  deleteidcard(id:number):Observable<IdCards>{
return this.httpidcard.delete<IdCards>(this.baseUrl+'/'+id);
  }


  addidcard(idcarddata:any):Observable<IdCards>{
    return this.httpidcard.post<IdCards>(this.baseUrl+'/', idcarddata);

  }

   editidcards(idcarddata:any, id:string):Observable<IdCards> {
    return this.httpidcard.put<IdCards> (this.baseUrl+'/'+id,idcarddata);
  }

}
