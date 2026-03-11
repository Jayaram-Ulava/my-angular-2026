import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContcatCeoComponent } from './contcat-ceo/contcat-ceo.component';
import { ConcatDirectorComponent } from './concat-director/concat-director.component';

@NgModule({
  declarations: [
    ContcatCeoComponent,
    ConcatDirectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    ContcatCeoComponent,
    ConcatDirectorComponent
  ]
})
export class ContactModule { }
