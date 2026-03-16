import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private reshttp:HttpClient) { }

  postregistration(dataregistration:any){
    return this.reshttp.post('https://backend-api-kwl0.onrender.com/users',dataregistration);
  }     
}
