import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsServicesService {
baseUrl:string='https://dummyjson.com/products';
  constructor(private httpproducts:HttpClient) { }

  getproducts(){
    return this.httpproducts.get(this.baseUrl);
  }


  postproducts(productsdata:any):Observable<any>{
return this.httpproducts.post(this.baseUrl + '/add', productsdata);
  }

  searchproduct(term:string):Observable<any>{
return this.httpproducts.get(this.baseUrl + '/?filter='+ term);
  }
}
