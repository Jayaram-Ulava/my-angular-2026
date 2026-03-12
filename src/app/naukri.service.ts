import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NaukriService {

  constructor(private naukrihttp:HttpClient) { }
  getNaukriData():Observable<any>{
    return this.naukrihttp.get("https://jsonfakery.com/jobs?limit=10&page=1");
  }


    filterNaukriData(filtervalue:any):Observable<any>{
    return this.naukrihttp.get("https://jsonfakery.com/jobs?filter="+filtervalue);
  }

  pageNaukriData(page:number):Observable<any>{
    return this.naukrihttp.get("https://jsonfakery.com/jobs?limit=10&page="+page);

  }
}
