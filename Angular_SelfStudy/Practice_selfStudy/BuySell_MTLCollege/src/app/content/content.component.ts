import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
laptops;
  constructor(private prodServ : ProductsService) {
   
   }

  ngOnInit() {
    this.laptops = this.prodServ.products;
  }
}
