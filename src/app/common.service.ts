import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  cartcount:number=0;

  cartcountsub:BehaviorSubject<number> = new BehaviorSubject(0);


  setcartcount(){
    this.cartcount++;
    this.cartcountsub.next(this.cartcount);
  }


  getcartcount(){
    return this.cartcountsub.asObservable();
  }
  constructor() { }

  decrecount(){
    this.cartcount--;
    this.cartcountsub.next(this.cartcount);
  }
}
