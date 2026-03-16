import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {

constructor(private logoutrouter:Router){}
  lgoout() {

  if(confirm("Are you sure you want to logout?")){
    sessionStorage.removeItem("logintoken");
    this.logoutrouter.navigateByUrl("/login"); 
    alert("Logout successful."); 
  }else {
    alert("Logout cancelled.");
  }
}
}
