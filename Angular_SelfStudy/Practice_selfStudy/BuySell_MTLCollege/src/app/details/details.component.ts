import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
name: string;
description: string;
price: string;
id : number
nextId : number
prevId : number;
nextDisabled : boolean = false;
prevDisabled : boolean = false;
  constructor(private route: ActivatedRoute, private ProdS: ProductsService) { }

  ngOnInit() {
  /*  this.id = this.route.snapshot.params['id'];
    for(let i = 0; i<this.ProdS.products.length; i++){
      let prod = this.ProdS.products[i];
      if(prod.id == this.id){
        this.name = prod.name;
        this.price = prod.price;
        this.description = prod.description;
      }  
    } */
     this.route.params.subscribe((params: Params) => {
          this.id = params.id;
          
          for(let i = 0; i<this.ProdS.products.length; i++){
            let prod = this.ProdS.products[i];
            if(prod.id == this.id){
              this.name = prod.name;
              this.price = prod.price;
              this.description = prod.description;
              if(i< this.ProdS.products.length-1 && i>=0){
              this.nextId = this.ProdS.products[+i+1].id;
                if(i==0){
                  this.prevDisabled = true;
                }else{
                  this.prevDisabled = false;
                }
              }
              if(i< this.ProdS.products.length && i>=1){
                this.prevId = this.ProdS.products[i-1].id;
                if(i== this.ProdS.products.length-1){
                  this.nextDisabled = true;
                }else{
                  this.nextDisabled = false;
                }
              }
            }  
          }
      }); 
  }

}
