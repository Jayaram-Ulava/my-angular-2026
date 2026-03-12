import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
   constructor(private httpvehicle:HttpClient) { }

    getvehicle():Observable<any> {
      return this.httpvehicle.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page=1');
  
  }

 deletevehicle(id:string):Observable<any> {
      return this.httpvehicle.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id);
  
  }

    searchvehicle(searchvecile:any):Observable<any> {
      return this.httpvehicle.get(
  'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter='+searchvecile);
  
  }

  pagevehicle(page:number):Observable<any> {
    return this.httpvehicle.get(
  'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page='+page);
  
  
  }

  sortvehicle(colum:string, order:string):Observable<any>{
    return this.httpvehicle.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy='+colum+'&order='+order)
  }
}
