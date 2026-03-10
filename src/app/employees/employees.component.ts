import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

employees:any[]=[
{ name:"Rahul Sharma", company:"Infosys", role:"Frontend Developer", exp:3, package:12 },
{ name:"Anita Reddy", company:"TCS", role:"Angular Developer", exp:2, package:10 },
{ name:"Vikram Singh", company:"Wipro", role:"Full Stack Developer", exp:5, package:15 },
{ name:"Sneha Patel", company:"Cognizant", role:"Tech Lead", exp:6, package:18 },
{ name:"Arjun Kumar", company:"Accenture", role:"Software Architect", exp:7, package:20 }
];

searchText:string="";

/* form inputs */

name="";
company="";
role="";
exp:number=0;
package:number=0;

/* total */

total:number=0;
showTotal=false;


/* ADD EMPLOYEE */

addEmployee(){

let emp={
name:this.name,
company:this.company,
role:this.role,
exp:this.exp,
package:this.package
}

this.employees.push(emp);

this.name="";
this.company="";
this.role="";
this.exp=0;
this.package=0;

}


/* SORT */

lowPackage(){
this.employees.sort((a,b)=>a.package-b.package);
}

highPackage(){
this.employees.sort((a,b)=>b.package-a.package);
}


/* SEARCH */

get filteredEmployees(){

return this.employees.filter(emp =>
emp.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
emp.company.toLowerCase().includes(this.searchText.toLowerCase())
)

}


/* TOTAL PACKAGE BUTTON */

calculateTotal(){

this.total=this.employees.reduce((sum,emp)=>sum+emp.package,0);

this.showTotal=true;

}

}