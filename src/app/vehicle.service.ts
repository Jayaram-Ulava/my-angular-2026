import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  baseUrl:string = 'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction';
   constructor(private httpvehicle:HttpClient) { }

    getvehicle():Observable<Vehicle[]> {
      return this.httpvehicle.get<Vehicle[]>(this.baseUrl+'?limit=10&page=1');
  
  }

 deletevehicle(id:string):Observable<Vehicle> {
      return this.httpvehicle.delete<Vehicle>(this.baseUrl+'/'+id);
  
  }

    searchvehicle(searchvecile:any):Observable<Vehicle[]> {
      return this.httpvehicle.get<Vehicle[]>(this.baseUrl+'?filter='+searchvecile);
  
  }

  pagevehicle(page:number):Observable<Vehicle[]> {
    return this.httpvehicle.get<Vehicle[]>(
  this.baseUrl+'?limit=10&page='+page);
  
  
  }

  sortvehicle(colum:string, order:string):Observable<Vehicle[]>{
    return this.httpvehicle.get<Vehicle[]>(this.baseUrl+'?sortBy='+colum+'&order='+order)
  }


  // query params api

      getvehicleQueryParams(term:string, column:string, order:string, page:number):Observable<Vehicle[]> {
      return this.httpvehicle.get<Vehicle[]>(this.baseUrl+'?filter='+term+"&sortBy="+column+"&order="+order+'&limit=10&page='+page);
  
  }

  createvehicle(create:any):Observable<Vehicle> {
      return this.httpvehicle.post<Vehicle>(this.baseUrl,create);
  }

  
  updatevehicle(update:any,id:string):Observable<Vehicle> {
      return this.httpvehicle.put<Vehicle>(this.baseUrl+'/'+id,update);
  }

  viewatevehiclebyid(id:string):Observable<Vehicle>{
    return this.httpvehicle.get<Vehicle>(this.baseUrl+'/'+id);  

  }
}
