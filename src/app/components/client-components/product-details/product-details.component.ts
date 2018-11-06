import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private productsService: ProductsService, private shopingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

}
