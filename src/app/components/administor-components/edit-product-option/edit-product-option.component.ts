import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';


@Component({
  selector: 'app-edit-product-option',
  templateUrl: './edit-product-option.component.html',
  styleUrls: ['./edit-product-option.component.css']
})
export class EditProductOptionComponent implements OnInit {

  constructor(public productsService: ProductsService) {
  }

  ngOnInit() {
  }
  deleteValue(value) {
    this.productsService.deleteValue(value);
  }
}
