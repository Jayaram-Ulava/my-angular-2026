import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdCardsRoutingModule } from './id-cards-routing.module';
import { IdcardsComponent } from './idcards/idcards.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewIDComponent } from './add-new-id/add-new-id.component';
import { ViewStudentComponent } from './view-student/view-student.component';


@NgModule({
  declarations: [
    IdcardsComponent,
    AddNewIDComponent,
    ViewStudentComponent
  ],
  imports: [
    CommonModule,
    IdCardsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class IdCardsModule { }
