import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieslistComponent } from './movieslist/movieslist.component';

const routes: Routes = [
  {path:'Movieslist',component:MovieslistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
