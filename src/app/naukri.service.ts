import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NaukriService {

  constructor(private naukrihttp:HttpClient) { }
  getNaukriData(){
    return this.naukrihttp.get("https://jsonfakery.com/jobs");
  }
}
