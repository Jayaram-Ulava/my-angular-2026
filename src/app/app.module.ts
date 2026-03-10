import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReactiveFormsModule}  from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { WellcomeComponent } from './wellcome/wellcome.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { BmiComponent } from './bmi/bmi.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RolePipe } from './role.pipe';
import { PricePipe } from './price.pipe';
import { MailsComponent } from './mails/mails.component';
import { EmployeesComponent } from './employees/employees.component';
import { CapitalDirective } from './capital.directive';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleService } from './vehicle.service';
import { FlipcartComponent } from './flipcart/flipcart.component';
import { AcountsComponent } from './acounts/acounts.component';
import { HilightsDirective } from './hilights.directive';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbordComponent,
    PagenotfoundComponent,
    HomeComponent,
    WellcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    DirectivesComponent,
    EventRegistrationComponent,
    BmiComponent,
    MailsComponent,
    EmployeesComponent,
    RolePipe,
    PricePipe,
    CapitalDirective,
    VehiclesComponent,
    FlipcartComponent,
    AcountsComponent,
    HilightsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatDividerModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
