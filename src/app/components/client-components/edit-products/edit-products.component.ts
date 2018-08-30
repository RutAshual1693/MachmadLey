import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {
  public showAdd: boolean = true;
  public listProducts: Array<object>;
  constructor(public productsService: ProductsService) {
    productsService.getListProducts().subscribe(
      (data: Array<object>) => {
        this.listProducts = data;
      });
    }
  ngOnInit() {
  }
  clicked() {
    this.showAdd = false;
  }
}
