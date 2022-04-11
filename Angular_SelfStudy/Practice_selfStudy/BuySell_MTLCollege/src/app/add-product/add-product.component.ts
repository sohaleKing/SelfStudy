import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addProductForm : FormGroup;

  constructor(private productsService : ProductsService, private router : Router) { }

  ngOnInit() {
   this.addProductForm = new FormGroup({
     'name' : new FormControl(null, [Validators.required, Validators.maxLength(20)]),
     'price' : new FormControl(null, Validators.required),
     'description' : new FormControl(null),
   });
  }

  addNewProduct(){
    this.productsService.products.push({
      id : (this.productsService.products.length + 1),
      name : this.addProductForm.value.name,
      price : this.addProductForm.value.price,
      description : this.addProductForm.value.description,
    });
    this.router.navigate(['/home'])
  }
 

}
