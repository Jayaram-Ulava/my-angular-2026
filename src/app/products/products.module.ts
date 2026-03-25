import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { CreateProductsComponent } from './create-products/create-products.component';
import { ReactiveFormsModule}  from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsListComponent,
    CreateProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductsModule { }
