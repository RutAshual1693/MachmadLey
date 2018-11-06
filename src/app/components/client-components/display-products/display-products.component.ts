import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { PaginationService } from '../../../services/pagination.service';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { ProductOptionsComponent } from '../../../components/administor-components/product-options/product-options.component';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {

  constructor(private productsService: ProductsService,
    private paginationService: PaginationService,
    private shoppingCartService: ShoppingCartService
  ) { }




  ngOnInit() {
    // get dummy data  
    // set items to json response
    // initialize to page 1
    this.paginationService.setPage(1);
  }
  productDetails(product)
  {
    this.productsService.showProductDetails = product;
    this.productsService.showProductOptions = this.productsService.listProductOptions.filter(x =>product.options.find(y=>y._id==x["_id"])!=null);

  }
}
