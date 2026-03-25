import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdcardsComponent } from './idcards/idcards.component';
import { AddNewIDComponent } from './add-new-id/add-new-id.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const routes: Routes = [
  {path:'idcards',component:IdcardsComponent},
  {path:'add-id',component:AddNewIDComponent},
  {path:'view-student/:id',component:ViewStudentComponent},
  {path:'edit-student/:id',component:AddNewIDComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdCardsRoutingModule { }
