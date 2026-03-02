import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'dashbord',component:DashbordComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'wellcome',component:WellcomeComponent}
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
