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
  listProductByCategoryForSort;
  constructor(private productsService: ProductsService,
    private paginationService: PaginationService,
    private shoppingCartService: ShoppingCartService
  ) { }

  maxPrice() {
    this.productsService.listProductByCategory = this.listProductByCategoryForSort;
    this.productsService.listProductByCategory = this.productsService.listProductByCategory.sort((a, b) => b['price'] - a['price']);
    this.paginationService.setPage(1);
  }
  minPrice() {
    this.productsService.listProductByCategory = this.listProductByCategoryForSort;
    this.productsService.listProductByCategory = this.productsService.listProductByCategory.sort((a, b) => a['price'] - b['price']);
    this.paginationService.setPage(1);
  }
  orders() {
    this.productsService.listProductByCategory = this.listProductByCategoryForSort;
    this.productsService.listProductByCategory = this.productsService.listProductByCategory.filter((a, b) => b["numOfOrders"] - a["numOfOrders"]);
    this.paginationService.setPage(1);
  }
  search(str) {
    this.productsService.listProductByCategory = this.listProductByCategoryForSort;
    this.productsService.listProductByCategory = this.productsService.listProductByCategory.filter(x => x["name"].indexOf(str) > 0);
    this.paginationService.setPage(1);
  }

  refresh()
  {
    this.productsService.listProductByCategory = this.listProductByCategoryForSort;
    this.paginationService.setPage(1);

  }
  ngOnInit() {
    this.listProductByCategoryForSort = this.productsService.listProductByCategory.filter(x=>x['_id']!="");
    this.paginationService.setPage(1);
  }
  productDetails(product) {
    this.productsService.showProductDetails = product;
    this.productsService.showProductOptions = this.productsService.listProductOptions.filter(x => product.options.find(y => y._id == x["_id"]) != null);
  }
}
