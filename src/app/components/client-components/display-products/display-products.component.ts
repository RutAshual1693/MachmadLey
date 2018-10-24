import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { PaginationService } from '../../../services/pagination.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {

  constructor(private productsService: ProductsService, private paginationService: PaginationService) { }



 
  ngOnInit() {
    // get dummy data  
    // set items to json response
        // initialize to page 1
    this.paginationService.setPage(1);
  }

  addBag() {

  }
}
