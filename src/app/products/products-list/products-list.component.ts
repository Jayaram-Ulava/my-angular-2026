import { Component } from '@angular/core';
import { ProductsServicesService } from '../products-services.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
totleproducts:any=[];

  constructor(private productsservices:ProductsServicesService){
this.getallproducts()
  }

  getallproducts(){
this.productsservices.getproducts().subscribe((prodata:any)=>{
this.totleproducts=prodata.products;
})
  }

  searchTerm:string='';
  onSearch() {
    this.productsservices.searchproduct(this.searchTerm).subscribe((rearchterm:any)=>{
      this.totleproducts=rearchterm.products.filter((product:any) => product.title.toLowerCase().includes(this.searchTerm.toUpperCase()));
    })
  }
}
