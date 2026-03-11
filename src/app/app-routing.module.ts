import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { BmiComponent } from './bmi/bmi.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { AcountsComponent } from './acounts/acounts.component';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { MailsComponent } from './mails/mails.component';
import { EmployeesComponent } from './employees/employees.component';
import { WeatherComponent } from './weather/weather.component';
import { NaukriComponent } from './naukri/naukri.component';
import { ContcatCeoComponent } from './contact/contcat-ceo/contcat-ceo.component';
import { ConcatDirectorComponent } from './contact/concat-director/concat-director.component';


const routes: Routes = [
  {path:'dashbord',component:DashbordComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'wellcome',component:WellcomeComponent},
    {path:'databinding',component:DataBindingComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'eventregistration',component:EventRegistrationComponent},
    {path:'bmi',component:BmiComponent},
    {path:'vehicle',component:VehiclesComponent},
    {path:'acounts',component:AcountsComponent},
    {path:'flipcard',component:FlipcartComponent},
    {path:'mails',component:MailsComponent},
    {path:'employees',component:EmployeesComponent},
    {path:'weather',component:WeatherComponent},
    {path:'naukri',component:NaukriComponent},
    {path:'contact',component:ContcatCeoComponent},
    {path:'concatdirector',component:ConcatDirectorComponent}

  ]},
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
