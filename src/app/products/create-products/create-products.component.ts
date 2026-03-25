import { Component } from '@angular/core';
import { ProductsServicesService } from '../products-services.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { max } from 'rxjs';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent {
  constructor(private productserv:ProductsServicesService, private routernav:Router  ){

// this.productsform.get('tags')?.valueChanges.subscribe((datapro:any)=>{
  
// })

  }

 productsform :FormGroup = new FormGroup({
  title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
  description: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
  category: new FormControl(),
  price: new FormControl('',[Validators.required, Validators.min(200), Validators.max(10000)]),
  thumbnail: new FormControl(),
  stock: new FormControl(),
  discountPercentage: new FormControl(),
  brand: new FormControl(),

  // nested form group
  dimensions: new FormGroup({
    width: new FormControl('',[Validators.required, Validators.min(2), Validators.max(10)]),
    height: new FormControl('',[Validators.required, Validators.min(5), Validators.max(10)]),
    depth: new FormControl()
  }),
  // dainamic form group
  tags: new FormControl(),
  beauty: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
  mascara: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),

  reviews: new FormArray([])

 })

 get reviewformArry(){
  return this.productsform.get('reviews') as FormArray;
 }
 addReview() {
  this.reviewformArry.push(
    new FormGroup({
      rating: new FormControl(),
      comment: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      reviewerName: new FormControl('',[Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      date: new FormControl(),
      reviewerEmail: new FormControl()
    })
  )
 }
 removeReview(i:number){
  this.reviewformArry.removeAt(i);
 }


 addform() {
 
this.productserv.postproducts(this.productsform.value).subscribe((res:any)=>{
  alert('Product added successfully');
  this.productsform.reset();
  console.log(res);
  this.routernav.navigateByUrl('/dashbord/products/products-list');
},(err:any)=>{
  alert('Failed to add product. Please try again.');
})

 }

 

 
}
