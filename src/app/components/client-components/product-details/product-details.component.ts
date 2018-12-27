import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private productsService: ProductsService, private shoppingCartService: ShoppingCartService) { }
  quantity = 1;
  ngOnInit() {
    //let p = this.shoppingCartService.shoppingCartList.find(x => x["_id"] == this.productsService.showProductDetails["_id"]);
    //if (p != null)
    //  this.quantity = p["quantity"];
  }

}
