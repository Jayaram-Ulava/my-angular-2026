import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MovieslistComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    FormsModule
  ]
})
export class MoviesModule { }
