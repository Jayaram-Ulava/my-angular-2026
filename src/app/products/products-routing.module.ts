import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { CreateProductsComponent } from './create-products/create-products.component';

const routes: Routes = [
  {path: 'products-list', component: ProductsListComponent},
  {path:'create-products',component: CreateProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
