import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlipcartService {

  constructor(private httpflip:HttpClient) { }

  getflipcard() {
    return this.httpflip.get('https://fakestoreapi.com/products');
  }
}
