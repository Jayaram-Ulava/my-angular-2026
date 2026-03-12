import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipcartService {

  constructor(private httpflip:HttpClient) { }

  getflipcard() {
    return this.httpflip.get('https://fakestoreapi.com/products?limit=6&page=1');
  }

   searchflipcard(searchflpi:any):Observable<any> {
      return this.httpflip.get(
  'https://fakestoreapi.com/products?filter='+searchflpi);
  
  }

  pagenaction(pagedata:any):Observable<any> {
    return this.httpflip.get('https://fakestoreapi.com/products?limit=10&page='+pagedata);
  }
}
