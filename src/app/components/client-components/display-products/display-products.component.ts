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
  arr = ["AKC6338 מיטה מלבנית משובצת.JPG", "AKC4600 מיטת אביב מלבנית.JPG", "AKC1500 מיטה אורטופדית דוגמת מעוין.JPG", "AKC3115 מיטת 80 מרובעת3.JPG", "מיטת-זמש-אורטופדית-250x150.jpg", "AKC3462 מיטה פסים עגולה2.JPG", "מיטת-זמש-אורטופדית-250x150.jpg", "מיטת-זמש-אורטופדית-250x150.jpg"]
  listProductByCategoryForSort;
  constructor(private productsService: ProductsService,
    private paginationService: PaginationService,
    private shoppingCartService: ShoppingCartService
  ) { }

   arrProductOption=[];
  productOption() {
    let haveOption = false;
    let i = 0;
    for (let pOptinItem in this.productsService.listProductOptions) {
      for (let pItem in this.productsService.listProductByCategory) {
        for (let pProductOption in this.productsService.listProductByCategory[pItem]["options"]) {
          if (this.productsService.listProductOptions[pOptinItem]["_id"] == this.productsService.listProductByCategory[pItem]["options"][pProductOption]["_id"]) {
            
            haveOption = true;
          }
        }
      }
      if (haveOption == true)
        this.arrProductOption[i++] = this.productsService.listProductOptions[pOptinItem];
    }
  }

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
    this.productOption();
    this.listProductByCategoryForSort = this.productsService.listProductByCategory.filter(x=>x['_id']!="");
    this.paginationService.setPage(1);
  }
  productDetails(product) {
    this.productsService.showProductDetails = product;
    this.productsService.showProductOptions = this.productsService.listProductOptions.filter(x => product.options.find(y => y._id == x["_id"]) != null);
  }
}
