import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdcardsComponent } from './idcards/idcards.component';
import { AddNewIDComponent } from './add-new-id/add-new-id.component';

const routes: Routes = [
  {path:'idcards',component:IdcardsComponent},
  {path:'add-id',component:AddNewIDComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdCardsRoutingModule { }
