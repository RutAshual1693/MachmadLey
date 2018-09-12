import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {
  public showAdd: boolean = true;
  constructor(public productsService: ProductsService) {
  
    }
  ngOnInit() {
  }
  clicked() {
    this.showAdd = false;
  }
  edit(product) {

  }
  delete(product) {
    this.productsService.deleteProduct(product._id);
  }
}
